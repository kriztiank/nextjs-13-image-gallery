// client component inside this server component
import SearchPage from "./SearchPage"

// we need a server component to declare metadata
export const metadata = {
    title: "Search - NextJS 13.4 Image Gallery",
}

export default function Page() {
  // client component inside this server component
    return <SearchPage />
}