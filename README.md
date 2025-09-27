Create a README file to answer the following question-

1.What is JSX, and why is it used?

1.Answer: JSX হলো JavaScript এর জন্য একটা syntax extension যেটা দেখতে HTML এর মতো লাগে।
এটা React-এ ব্যবহার করা হয় যাতে আমি UI এর structure সরাসরি JavaScript এর ভেতরে লিখতে পারি।

2.What is the difference between State and Props?

2.Answer: Props:: Props হলো data যেটা parent component থেকে child component এ পাঠানো হয়। Props child component থেকে পরিবর্তন করা যায় না, শুধু parent থেকে পাঠানো যায়। Component কে reusable করার জন্য data পাঠাতে ব্যবহার করা হয়। Props কে ধরা যাই function parameter এর মতো।

State:: State হলো data বা information যা component এর ভেতরে রাখা হয় এবং সময়ের সাথে পরিবর্তন হতে পারে। State কে useState দিয়ে আপডেট করা যায়। Component এর behavior এবং UI কে dynamic করতে state ব্যবহার হয়। State কে ধরা যাই component এর ভেতরে থাকা local variable।

3.What is the useState hook, and how does it work?

3.Answer: Component এর ভেতরে data রাখার এবং update করার জন্য useState ব্যবহার করা হয়। যখন আমি useState ব্যবহার করি, তখন React একটা state variable এবং তার সাথে একটা function return করে। State পরিবর্তন হলে React re-render করে, আর নতুন state অনুযায়ী UI update হয়।

4.How can you share state between components in React?

4.Answer: যখন দুইটা child component এর মধ্যে data share করতে হবে, তখন state কে তাদের parent এ নিয়ে যেতে হয়। Parent state hold করবে এবং props এর মাধ্যমে child এ পাঠাবে।

5.How is event handling done in React?

5.Answer: React এ event attribute গুলো সবসময় camelCase হয়।React এ event handler হিসেবে function pass করতে হয়।

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
