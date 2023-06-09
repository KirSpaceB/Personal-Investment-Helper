import { InputBar } from "../shared/InputBar/InputBar"

export const DisplayCryptoTicker = () => {
  
  return (
    <div className="mr-10 flex flex-col items-center justify-center">
      <InputBar svgPaths={["M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8","M8 6l0 12","M8 12l6 0","M9 3l0 3","M13 3l0 3","M9 18l0 3","M13 18l0 3" ]}/>
      <div className="mt-4">
        <p>TickerName</p>
        <p>24H High</p>
        <p>24H Low</p>
      </div>
    </div>
  )
}
