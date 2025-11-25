interface Step4Props {
  selectedValue: string;
  selectedDesign: string;
  recipientInfo: {
    name: string;
    email?: string;
    phone?: string;
    message: string;
    deliveryMethod: string;
  };
  isProcessing: boolean;
  onProceedToPayment: () => void;
  onPrev: () => void;
}

export default function GiftCardStep4({
  selectedValue,
  selectedDesign,
  recipientInfo,
  isProcessing,
  onProceedToPayment,
  onPrev,
}: Step4Props) {
  const designNames = {
    minimalist: 'Minimalist Gold',
    floral: 'Floral Serenity',
    classic: 'Classic Black',
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-light mb-6 text-foreground">Order Review</h3>

        {/* Gift Card Preview */}
        <div className="mb-8 p-6 bg-border/10 rounded-lg">
          <p className="text-sm font-light text-foreground/60 mb-2">Gift Card Value</p>
          <p className="text-3xl font-bold text-gold mb-4">{selectedValue}</p>
          <p className="text-sm font-light text-foreground/60 mb-2">Design</p>
          <p className="text-lg font-light text-foreground">
            {designNames[selectedDesign as keyof typeof designNames]}
          </p>
        </div>

        {/* Recipient Info */}
        <div className="space-y-4 mb-8">
          <div className="border-b border-border/30 pb-4">
            <p className="text-sm font-light text-foreground/60 mb-1">Recipient</p>
            <p className="font-light text-foreground">{recipientInfo.name}</p>
          </div>
          <div className="border-b border-border/30 pb-4">
            <p className="text-sm font-light text-foreground/60 mb-1">Delivery To</p>
            <p className="font-light text-foreground">
              {recipientInfo.deliveryMethod === 'email'
                ? recipientInfo.email
                : recipientInfo.phone}
            </p>
          </div>
          {recipientInfo.message && (
            <div className="border-b border-border/30 pb-4">
              <p className="text-sm font-light text-foreground/60 mb-1">Message</p>
              <p className="font-light text-foreground italic">{recipientInfo.message}</p>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-gold/5 p-6 rounded-lg mb-8">
          <div className="flex justify-between mb-2">
            <span className="font-light text-foreground">Subtotal</span>
            <span className="font-light text-foreground">{selectedValue}</span>
          </div>
          <div className="flex justify-between mb-4 pb-4 border-b border-border/30">
            <span className="font-light text-foreground">Processing Fee</span>
            <span className="font-light text-foreground">$0.00</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-foreground">Total</span>
            <span className="font-semibold text-gold text-lg">{selectedValue}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onPrev}
          disabled={isProcessing}
          className="flex-1 px-6 py-3 border-2 border-gold text-gold font-medium rounded-full hover:bg-gold/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          onClick={onProceedToPayment}
          disabled={isProcessing}
          className="flex-1 px-6 py-3 bg-gold text-charcoal font-medium rounded-full hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </>
          ) : (
            'Proceed to Payment'
          )}
        </button>
      </div>
    </div>
  );
}
