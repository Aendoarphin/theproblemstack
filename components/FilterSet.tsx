
function FilterSet({ options1, options2 }: { options1: Array<{ label: string; value: string }>; options2: Array<{ label: string; value: string }> }) {
  return (
    <div className="inline-flex gap-2 *:text-foreground *:rounded-lg *:border-muted/20 *:border **:bg-background">
          <select
            name="industry-type"
            id="industry-type"
            className="w-max px-2 py-1 focus:ring-2 focus:ring-primary outline-none cursor-pointer"
          >
            <option value="">All Industries</option>
            {options1.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select
            name="industry-filter"
            id="industry-filter"
            className="w-max px-2 py-1 focus:ring-2 focus:ring-primary outline-none cursor-pointer"
          >
            {options2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
  )
}

export default FilterSet