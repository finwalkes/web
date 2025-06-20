type Props = {
    categories: string[]
    selected: string
    onSelect: (cat: string) => void
}

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
return (
    <div className="flex gap-3 mb-4">
        <button
        onClick={() => onSelect("")}
        className={`px-3 py-1 rounded-xl border ${selected === "" ? "bg-blue-600 text-white" : "bg-white text-blue-700"}`}
        >
        All
        </button>
            {categories.map(cat => (
        <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-3 py-1 rounded-xl border ${selected === cat ? "bg-blue-600 text-white" : "bg-white text-blue-700"}`}
        >
            {cat}
        </button>
        ))}
    </div>
    )
}
