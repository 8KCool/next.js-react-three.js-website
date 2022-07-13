import { ReactNode, useState } from 'react'
import {
  CHINESE_METAMASK_INSTRUCTIONS,
  CHINESE_WEBSITE_INSTRUCTIONS,
  ENGLISH_METAMASK_INSTRUCTIONS,
  ENGLISH_WEBSITE_INSTRUCTIONS,
} from './constants'
import { ShowInstructions } from './ShowInstructions'

interface BuyInstructionsProps {
  children?: ReactNode
}

export const BuyInstructions: React.FC<BuyInstructionsProps> = () => {
  const [lang, setLang] = useState<'en' | 'cn'>('en')
  const metamaskInstructions =
    lang === 'en'
      ? ENGLISH_METAMASK_INSTRUCTIONS
      : CHINESE_METAMASK_INSTRUCTIONS
  const websiteInstructions =
    lang === 'en' ? ENGLISH_WEBSITE_INSTRUCTIONS : CHINESE_WEBSITE_INSTRUCTIONS
  return (
    <div className="mx-auto">
      {/* How to Buy Trigan Tokens (TED) Via the Metamask Wallet */}
      <ShowInstructions
        instructions={metamaskInstructions}
        lang={lang}
        title="How to Buy Trigan Tokens (TED) Via the Metamask Wallet"
        onLangChange={setLang}
        shortTitle="How to Buy (Metatask)"
      />

      {/* How to Buy Trigan Tokens (TED) Via it’s Website */}
      <ShowInstructions
        instructions={websiteInstructions}
        lang={lang}
        title="How to Buy Trigan Tokens (TED) Via it's Website"
        onLangChange={setLang}
        shortTitle="How to Buy (Website)"
      />
    </div>
  )
}
