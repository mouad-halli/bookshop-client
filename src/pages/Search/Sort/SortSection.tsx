
const SortSection = () => {
  return (
    <section className=" font-primary w-full flex justify-end gap-x-4 py-4 text-sm">
        <label className="font-secondary">Sort by :</label>
        <select className="border rounded border-black" name="sort">
          <option value="volvo">Relevence</option>
          <option value="opel">price high to low</option>
          <option value="saab">Price low to high</option>
        </select>
        <span>40 products</span>
    </section>
  )
}

export default SortSection