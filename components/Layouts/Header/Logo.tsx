import React from 'react'
import Link from 'next/link'
import { ROUTES } from '@@/routes'

export const Logo = (): JSX.Element => {
  return (
    <div className="logo">
      <Link href={ROUTES.HOME} passHref>
        <a>
          <img src="images/l1.png" alt="" />
        </a>
      </Link>
    </div>
  )
}
