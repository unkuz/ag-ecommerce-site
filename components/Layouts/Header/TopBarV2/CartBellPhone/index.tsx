import React from 'react'
import { Account } from './Account'
import { Cart } from './Cart'
import { Notification } from './Notification'

export const CartBellPhone = (): JSX.Element => {
  return (
    <div className="cart_bell_phone">
      <ul>
        <Cart />
        <Notification />
        <Account />
      </ul>
    </div>
  )
}
