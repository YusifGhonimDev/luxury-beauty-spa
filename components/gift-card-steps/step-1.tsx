"use client"

import { useState } from "react"

interface Step1Props {
  selectedValue: string
  setSelectedValue: (value: string) => void
  onNext: () => void
}

export default function GiftCardStep1({ selectedValue, setSelectedValue, onNext }: Step1Props) {
  const values = ["$50", "$100", "$200"]
  const [customValue, setCustomValue] = useState("")

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light mb-6 text-foreground">Select Gift Card Value</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {values.map((value) => (
            <button
              key={value}
              onClick={() => {
                setSelectedValue(value)
                setCustomValue("")
              }}
              className={`p-6 rounded-lg border-2 transition-all font-light text-lg ${
                selectedValue === value ? "border-gold bg-gold/10 text-gold" : "border-border/30 hover:border-gold"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-foreground/60 font-light">Or enter custom amount:</span>
          <input
            type="number"
            placeholder="$"
            value={customValue}
            onChange={(e) => {
              const val = e.target.value
              setCustomValue(val)
              setSelectedValue(`$${val}`)
            }}
            className="w-24 px-4 py-2 border border-border rounded-lg bg-background text-foreground font-light"
          />
        </div>
      </div>

      <button
        disabled={!selectedValue}
        onClick={onNext}
        className="w-full px-6 py-3 bg-gold text-charcoal font-medium rounded-full hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next Step
      </button>
    </div>
  )
}
