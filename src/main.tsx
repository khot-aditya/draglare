import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    Hello World!

    <button className="btn btn-primary">Button</button>

    <article className="prose lg:prose-xl">
      <h1>Garlic 1</h1>
      <h2>Garlic 2</h2>
      <h3>Garlic 3</h3>
      <h4>Garlic 4</h4>
      <h5>Garlic 5</h5>
      <h6>Garlic 6</h6>
      <p>
        For years parents have espoused the health benefits of eating garlic bread with cheese to their
        children, with the food earning such an iconic status in our culture that kids will often dress
        up as warm, cheesy loaf for Halloween.
      </p>
      <span>
        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
        springing up around the country.
      </span>
    </article>
  </React.StrictMode>,
)
