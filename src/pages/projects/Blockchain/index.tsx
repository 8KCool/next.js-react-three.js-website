import { ReactNode } from 'react'
import { GlobalLayout } from '../../../components/layouts/GlobalLayout'
import BlockchainTypeWriter from './type-writer.js'
import { Title } from '../../../components/shared/Title'

interface BlockchainProps {
  children?: ReactNode
}

const Blockchain: React.FC<BlockchainProps> = () => {
  return (
    <GlobalLayout>
      <section id="blockchain" className="px-5">
        <Title title="Blockchain" />
        <div>
          <p className=" ">
            Current blockchain solutions attempt to solve the same old problems,
            but Web3 is about change. About moving past the old Web2.0 world
            towards something better. We want to make life fairer by providing
            better ways of living. To achieve this, we need a new kind of
            blockchain. The First {<BlockchainTypeWriter />} blockchain.
            <br />
            Designed for human living Machine and Human Consensus Consensus as a
            Service Temporal and Geo-Aware Sharding Mutable and Immutable Data A
            new, fair yet efficient consensus mechanism. Increasing Strength
            Utility Resilience Frugality Speed
          </p>
        </div>
      </section>
    </GlobalLayout>
  )
}
export default Blockchain
