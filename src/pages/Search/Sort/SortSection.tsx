
const SortSection = () => {
  return (
    <section className="w-full flex justify-end gap-x-4 py-4 text-sm">
        <label>Sort by:</label>
        <select name="sort">
          <option value="volvo">Relevence</option>
          <option value="opel">price high to low</option>
          <option value="saab">Price low to high</option>
        </select>
        <h2>40 products</h2>
    </section>
  )
}

export default SortSection