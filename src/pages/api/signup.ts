import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt: string = bcrypt.genSaltSync()
  if (req.method === 'POST') {
    const { email, password, name }: User = req.body
    if (email && password && name) {
      let user: User
      // Create a user in prisma DB
      try {
        user = await prisma.user.create({
          data: {
            email,
            password: bcrypt.hashSync(password, salt),
            name,
          },
        })
      } catch (error) {
        res.status(401).json({ error: 'User already exists' })
        return
      }

      // Create a token with JWT for the session
      const secret = process.env.JWT_SECRET
      const cookieName = process.env.COOKIE_NAME

      const token: string = jwt.sign(
        {
          email: user.email,
          id: user.id,
          time: Date.now(),
        },
        secret,
        { expiresIn: '8h' }
      )

      // set cookie for jWT token
      res.setHeader(
        'Set-Cookie',
        cookie.serialize(cookieName, token, {
          httpOnly: true,
          maxAge: 8 * 60 * 60,
          path: '/',
          sameSite: 'lax',
          secure: process.env.NODE_ENV === 'production',
        })
      )

      const resData = <User>{
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
      // return the user created excluding hashed password
      res.status(200).json(resData)
    } else {
      res.status(401).json({ error: 'Please provide a valid email, password and name' })
    }
  } else {
    res.status(401).json({ error: 'Invalid method, here only POST requests are allowed' })
  }
}
