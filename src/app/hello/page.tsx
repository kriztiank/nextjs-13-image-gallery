
export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // throw Error("Some Error")
  return <div>Hello, NextJS 13</div>
}
