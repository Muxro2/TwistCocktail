"use client"

interface SearchboxProps {
  query: string;
  setQuery: (val: string) => void;
	setSearchFocused: (val: boolean) => void
}

export default function Searchbox({query, setQuery, setSearchFocused}: SearchboxProps) {
	return (
		<div className="relative flex flex-1 h-[60%] items-center rounded-full border-1 border-accent">
	  	<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onFocus={() => setSearchFocused(true)}
				onBlur={() => setSearchFocused(false)}
				className="h-full flex-1 pl-4 text-accent font-serif font-thin" />
			<svg 
				className="h-6 w-6 mr-3"
				viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffa500"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="##ffa500" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
		</div>
	)
}
