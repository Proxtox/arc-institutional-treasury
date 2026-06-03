# arc-institutional-treasury

Smart contract suite for institutional treasury management on Arc.

## Overview
Starter for building compliant, multi-sig treasury systems optimized for stablecoins and tokenized assets on Circle's Arc L1.

## Tech Stack
- Solidity
- Multi-sig patterns
- Scheduled execution

## Getting Started
```bash
git clone https://github.com/Proxtox/arc-institutional-treasury.git
cd arc-institutional-treasury
npm install
```

## Key Files
- `contracts/InstitutionalTreasury.sol` - Basic multi-owner + scheduled payment logic

## Next Steps
- Add full multi-sig confirmation flow
- Implement role-based access
- Add yield strategies for idle stablecoins
- Integrate compliance reporting

## License
MIT