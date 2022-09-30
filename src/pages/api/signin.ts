import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password }: User = req.body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (user) {
    // check if password match
    if (user && bcrypt.compareSync(password, user.password)) {
      // Create a token with JWT for the session
      const token: string = jwt.sign(
        {
          email: user.email,
          id: user.id,
          time: Date.now(),
        },
        process.env.JWT_SECRET,
        { expiresIn: '8h' }
      )

      // set cookie for jWT token
      res.setHeader(
        'Set-Cookie',
        cookie.serialize(process.env.COOKIE_NAME, token, {
          httpOnly: true,
          maxAge: 8 * 60 * 60,
          path: '/',
          sameSite: 'lax',
          secure: process.env.NODE_ENV === 'production',
        })
      )
      // res data model
      const resData = <User>{
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      }
      // return the user found
      res.status(200).json(resData)
    } else {
      res.status(401).json({ error: 'Incorrect Password' })
    }
  }
  res.status(401).json({ error: 'Email not found' })
}
