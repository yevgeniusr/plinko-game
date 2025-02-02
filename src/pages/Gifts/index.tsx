import { Gift } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from 'store/auth'
import { formatPoints } from 'utils/currencyFormat'

export function Gifts() {
  const redeemGift = useAuthStore(state => state.redeemGift)
  const currentBalance = useAuthStore(state => state.wallet.balance)
  const navigate = useNavigate()
  async function handleRedeemGift() {
    await redeemGift()
    navigate('/')
  }
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-text">
      <Gift className="text-purple" weight="fill" size="80" />
      <span className="text-center text-lg font-bold">
        Yay!!! We have a present for you!
      </span>
      <span className="text-center text-lg font-bold">
        We understand that you only have{' '}
        <span className="text-purple">{formatPoints(currentBalance)}</span>{' '}
        $SCRIM.
        <br />
        But don't worry, on this page you can redeem up to{' '}
        <span className="text-purple">300</span> $SCRIM
        <br /> each time your balance is below{' '}
        <span className="text-purple">10 $SCRIM</span> <br />
        just click the button below and count on luck. <br />
      </span>
      <button
        onClick={handleRedeemGift}
        className="rounded-md bg-purpleDark px-4 py-2 font-bold text-text transition-colors hover:bg-purple"
      >
        CLAIM
      </button>
    </div>
  )
}
