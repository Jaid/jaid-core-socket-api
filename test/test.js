import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: jaidCoreSocketApi} = indexModule

it("should run", () => {
  const result = jaidCoreSocketApi()
  expect(result).toBeGreaterThan(1549410770)
})