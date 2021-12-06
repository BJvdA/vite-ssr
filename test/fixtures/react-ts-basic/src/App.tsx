import React, { useState } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { Context } from 'vite-ssr/react'

export default function ({ router }: Context) {
  const routesElement = useRoutes(router.routes)
  const [count, setCount] = useState(0)
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/repos">Repos</Link>
      </nav>

      <div>
        <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      </div>

      {routesElement}
    </>
  )
}
