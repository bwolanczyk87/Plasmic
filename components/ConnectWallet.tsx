import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { flare } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'd33634f43c5061ebc14151ee8b51c7a0'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [flare] as const
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export interface ConnectWalletProps {
  children?: React.ReactNode;
  className?: string;
  verbose?: boolean;
}

export function ConnectWallet({ children, className, verbose }: ConnectWalletProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <w3m-button />
      </QueryClientProvider>
    </WagmiProvider>
  )
}