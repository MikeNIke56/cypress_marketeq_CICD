<p align="center">
  This repository contains all the icons of the design system of Blend Metrics, and <br> you can use these icons by following the below <a href="#installation-instructions">installation instructions</a>
<p>

## Installation instructions

First, install `@blend-metrics/icons` from npm:

```sh
npm install @blend-metrics/icons
```

Now each icon can be imported individually as a React component:

```js
import { AngelListDefault } from "@blend-metrics/icons/social";

function MyComponent() {
  return (
    <div>
      <AngelListDefault className="h-6 w-6 text-blue-500" />
      <p>...</p>
    </div>
  );
}

import { AngelListSolid } from "@blend-metrics/icons/social-solid";

function MyAnotherComponent() {
  return (
    <div>
      <AngelListSolid className="h-6 w-6 text-gray-500" />
      <p>...</p>
    </div>
  );
}
```

The social icons can be imported from `@blend-metrics/icons/social` as well as `@blend-metrics/icons/social-solid`

Likewise, the country icons can be imported from `@blend-metrics/icons/flags`

Similarly, you can import the payment method icons from `@blend-metrics/icons/payment-methods`

We've also got integration icons which can be imported from `@blend-metrics/icons/brands`

Design system of Blend Metrics also got a whole variety of icons which you can import from `@blend-metrics/icons`

The special icons can be imported from `@blend-metrics/icons/special`
