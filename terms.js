const paymentTerms = [
    "Razorpay",
    "Payment gateway",
    "Online payments",
    "E-commerce",
    "Digital payments",
    "Mobile payments",
    "Card payments",
    "Cards",
    "Debit cards",
    "Credit cards",
    "Net banking",
    "UPI payments",
    "QR code payments",
    "Contactless payments",
    "Payment processing",
    "Merchant account",
    "Payment link",
    "Subscription payments",
    "Payment APIs",
    "Payment integration",
    "Transaction fees",
    "Settlements",
    "Refunds",
    "Payment security",
    "Two-factor authentication",
    "Fraud detection",
    "PCI-DSS compliance",
    "3D Secure",
    "Tokenization",
    "Multi-currency support",
    "International payments",
    "Payouts",
    "Bulk payments",
    "Payment reminders",
    "Invoice management",
    "Recurring payments",
    "Subscription billing",
    "Payment analytics",
    "Payment notifications",
    "Payment routing",
    "Payment verification",
    "Risk management",
    "Chargebacks",
    "Dispute resolution",
    "Customer authentication",
    "Payment gateway API",
    "Hosted checkout",
    "Payment forms",
    "Checkout customization",
    "One-click payments",
    "Digital wallets",
    "PayPal integration",
    "Apple Pay integration",
    "Google Pay integration",
    "Amazon Pay integration",
    "Paytm integration",
    "PhonePe integration",
    "RazorpayX",
    "Business banking",
    "Current account",
    "Virtual account",
    "Account reconciliation",
    "Expense management",
    "Payment tracking",
    "Escrow payments",
    "Instant settlements",
    "Payment settlements",
    "Payment gateway plugins",
    "Payment routing optimization",
    "Recurring billing",
    "Subscription management",
    "Subscription analytics",
    "Subscription lifecycle",
    "Subscription upgrades",
    "Subscription downgrades",
    "Subscription cancellations",
    "Subscription billing periods",
    "Subscription trial periods",
    "Payment conversion rates",
    "Payment success rate",
    "Payment failure rate",
    "Payment retry mechanism",
    "Partial payments",
    "Split payments",
    "Marketplace payments",
    "Seller settlements",
    "Buyer protection",
    "Payment gateway documentation",
    "Developer APIs",
    "Sandbox environment",
    "Test mode",
    "Live mode",
    "Payment gateway setup",
    "Integration guides",
    "Webhooks",
    "Callback URLs",
    "Payment forms customization",
    "Payment data encryption",
    "Payment gateway reliability",
    "Payment gateway availability",
    "Payment gateway downtime",
    "Payment gateway maintenance",
    "Customer support",
    "Account management",
    "Payment gateway fees",
    "Payment gateway contracts",
    "Payment gateway comparison",
    "Payment gateway reviews",
    "Payment gateway ratings",
    "Mobile app payments",
    "In-app payments",
    "Cross-border payments",
    "Dynamic currency conversion",
    "International payment gateways",
    "Payment gateway partnerships",
    "Card authentication",
    "Strong customer authentication",
    "Payment gateway scalability",
    "Payment gateway performance",
    "Subscription churn rate",
    "Payment disputes",
    "Chargeback prevention",
    "Payment fallback options",
    "Payment gateway downtime alerts",
    "Payment gateway reporting",
    "Payment gateway dashboards",
    "Payment gateway plugins",
    "Payment gateway customization",
    "Payment gateway integrations",
    "Payment gateway reliability",
    "Payment gateway security",
    "Payment gateway encryption",
    "Payment gateway settlement periods",
    "Payment gateway transaction limits",
    "Payment gateway fraud prevention",
    "Payment gateway risk assessment",
    "Payment gateway chargeback management",
    "Payment gateway compliance",
    "Payment gateway customer experience",
    "Payment gateway conversion optimization",
    "Payment gateway user interface",
    "Payment gateway user experience",
    "Payment gateway branding",
    "Payment gateway onboarding",
    "Payment gateway verification",
    "Payment gateway account verification",
    "Payment gateway transaction history",
    "Payment gateway subscription plans",
    "Payment gateway pricing models",
    "Payment gateway revenue sharing",
    "Payment gateway payout options",
    "Payment gateway funds settlement",
    "Payment gateway merchant services",
    "Payment gateway banking services",
    "Payment gateway financial services",
    "Payment gateway value-added services",
    "Payment gateway loyalty programs",
    "Payment gateway partner programs",
    "Payment gateway reseller programs",
    "Payment gateway affiliate programs",
    "Payment gateway customer segmentation",
    "Payment gateway customer targeting",
    "Payment gateway customer profiling",
    "Payment gateway user segmentation",
    "Payment gateway user targeting",
    "Payment gateway user profiling",
    "Payment gateway customer retention",
    "Payment gateway user retention",
    "Payment gateway customer satisfaction",
    "Payment gateway user satisfaction",
    "Payment gateway customer feedback",
    "Payment gateway user feedback",
    "Payment gateway customer support",
    "Payment gateway user support",
    "Payment gateway customer success",
    "Payment gateway user success",
    "Payment gateway customer engagement",
    "Payment gateway user engagement",
    "Payment gateway customer loyalty",
    "Payment gateway user loyalty",
    "Payment gateway customer acquisition",
    "Payment gateway user acquisition",
    "Payment gateway customer acquisition channels",
    "Payment gateway user acquisition channels",
    "Payment gateway customer acquisition strategies",
    "Payment gateway user acquisition strategies",
    "Payment gateway customer acquisition cost",
    "Payment gateway user acquisition cost",
    "Payment gateway customer retention strategies",
    "Payment gateway user retention strategies",
    "Payment gateway customer churn rate",
    "Payment gateway user churn rate",
    "Payment gateway customer lifetime value",
    "Payment gateway user lifetime value",
    "Payment gateway customer journey",
    "Payment gateway user journey",
    "Payment gateway customer experience design",
    "Payment gateway user experience design",
    "Payment gateway customer behavior analysis",
    "Payment gateway user behavior analysis",
    "ACH",
    "APIs",
    "Authentication",
    "Authorization",
    "Bank transfers",
    "Billing",
    "Bitcoin",
    "Card BIN check",
    "Card payments",
    "Cards",
    "Chargebacks",
    "Checkout",
    "Credit cards",
    "Cryptocurrency",
    "Customer support",
    "Debit cards",
    "Digital wallets",
    "Dispute resolution",
    "E-commerce",
    "Encryption",
    "Escrow",
    "Fraud detection",
    "Gateway fees",
    "Hosted checkout",
    "In-app payments",
    "Invoicing",
    "Merchant account",
    "Mobile payments",
    "Money transfer",
    "Net banking",
    "Online payments",
    "Payment analytics",
    "Payment APIs",
    "Payment forms",
    "Payment gateway",
    "Payment integration",
    "Payment link",
    "Payment processing",
    "Payment reminders",
    "Payment routing",
    "Payment security",
    "Payment tracking",
    "Payment verification",
    "Payouts",
    "QR codes",
    "Recurring payments",
    "Refunds",
    "Risk management",
    "Subscription billing",
    "Tokenization",
    "Transaction fees",
    "Transaction history",
    "Transaction monitoring",
    "UPI payments",
    "Virtual currency",
    "Web payments",
    "Accounting",
    "ACH transfer",
    "Adyen",
    "Affiliate marketing",
    "Alipay",
    "Alternative payments",
    "American Express",
    "Apple Pay",
    "Authorization hold",
    "Automated payments",
    "Balance",
    "Banking",
    "Banking app",
    "Banking services",
    "Bill payment",
    "BitPay",
    "Braintree",
    "Buy now, pay later",
    "Card authorization",
    "Card issuer",
    "Card network",
    "Cash",
    "Cashback",
    "Chargeback prevention",
    "Checkout process",
    "Coinbase",
    "Contactless payments",
    "Conversion rate",
    "Cross-border payments",
    "Cryptocurrency exchange",
    "Customer experience",
    "Customer onboarding",
    "Customer profiling",
    "Customer retention",
    "Customer verification",
    "Data security",
    "Digital currency",
    "Direct debit",
    "E-commerce platform",
    "EMV",
    "Encryption key",
    "Ethereum",
    "Expense management",
    "Financial technology",
    "Fraud prevention",
    "Gatekeeper",
    "Gift cards",
    "Google Pay",
    "Hardware wallet",
    "Identity verification",
    "Instalments",
    "Integration",
    "International payments",
    "Invoice management",
    "Issuing bank",
    "KYC",
    "Loyalty program",
    "Mastercard",
    "Merchant",
    "Merchant services",
    "Mobile banking",
    "Mobile wallet",
    "Money laundering",
    "Near field communication",
    "Online marketplace",
    "Order management",
    "Overdraft",
    "PCI-DSS",
    "Payment app",
    "Payment authorization",
    "Payment confirmation",
    "Payment failure",
    "Payment flow",
    "Payment gateway provider",
    "Payment notification",
    "Payment plan",
    "Payment platform",
    "Payment provider",
    "Payment request",
    "Payment reversal",
    "Payment solution",
    "Payment system",
    "PayPal",
    "Peer-to-peer payments",
    "POS",
    "Prepaid card",
    "Processing fee",
    "Reconciliation",
    "Recurring billing",
    "Regulation",
    "Remittance",
    "Risk assessment",
    "SaaS",
    "Secure payment",
    "Security code",
    "SEPA",
    "Stripe",
    "Subscription management",
    "Taxation",
    "Transaction",
    "Transaction ID",
    "Transaction limit",
    "Transaction status",
    "Trust",
    "User authentication",
    "User experience",
    "User interface",
    "User verification",
    "Virtual terminal",
    "Visa",
    "Wallet",
    "Wire transfer",
    "ACH",
    "Authorization",
    "Bank transfers",
    "Card BIN check",
    "Card payments",
    "Chargebacks",
    "Checkout",
    "Credit cards",
    "Cryptocurrency",
    "Customer support",
    "Debit cards",
    "Digital wallets",
    "Dispute resolution",
    "E-commerce",
    "Encryption",
    "Fraud detection",
    "Gateway fees",
    "Hosted checkout",
    "In-app payments",
    "Invoicing",
    "Merchant account",
    "Mobile payments",
    "Net banking",
    "Online payments",
    "Payment analytics",
    "Payment APIs",
    "Payment forms",
    "Payment gateway",
    "Payment integration",
    "Payment link",
    "Payment processing",
    "Payment reminders",
    "Payouts",
    "QR codes",
    "Recurring payments",
    "Refunds",
    "Risk management",
    "Subscription billing",
    "Tokenization",
    "Transaction fees",
    "UPI payments",
    "Verification",
    "ACH",
    "APIs",
    "Authentication",
    "Authorization",
    "Bank transfers",
    "Billing",
    "Bitcoin",
    "Card BIN check",
    "Card payments",
    "Cards",
    "Chargebacks",
    "Checkout",
    "Credit cards",
    "Cryptocurrency",
    "Customer support",
    "Debit cards",
    "Digital wallets",
    "Dispute resolution",
    "E-commerce",
    "Encryption",
    "Escrow",
    "Fraud detection",
    "Gateway fees",
    "Hosted checkout",
    "In-app payments",
    "Invoicing",
    "Merchant account",
    "Mobile payments",
    "Money transfer",
    "Net banking",
    "Online payments",
    "Payment analytics",
    "Payment APIs",
    "Payment forms",
    "Payment gateway",
    "Payment integration",
    "Payment link",
    "Payment processing",
    "Payment reminders",
    "Payment routing",
    "Payment security",
    "Payment tracking",
    "Payment verification",
    "Payouts",
    "QR codes",
    "Recurring payments",
    "Refunds",
    "Risk management",
    "Subscription billing",
    "Tokenization",
    "Transaction fees",
    "Transaction history",
    "Transaction monitoring",
    "UPI payments",
    "Virtual currency",
    "Web payments",
    "Accounting",
    "ACH transfer",
    "Adyen",
    "Affiliate marketing",
    "Alipay",
    "Alternative payments",
    "American Express",
    "Apple Pay",
    "Authorization hold",
    "Automated payments",
    "Balance",
    "Banking",
    "Banking app",
    "Banking services",
    "Bill payment",
    "BitPay",
    "Braintree",
    "Buy now, pay later",
    "Card authorization",
    "Card issuer",
    "Card network",
    "Cash",
    "Cashback",
    "Chargeback prevention",
    "Checkout process",
    "Coinbase",
    "Contactless payments",
    "Conversion rate",
    "Cross-border payments",
    "Cryptocurrency exchange",
    "Customer experience",
    "Customer onboarding",
    "Customer profiling",
    "Customer retention",
    "Customer verification",
    "Data security",
    "Digital currency",
    "Direct debit",
    "E-commerce platform",
    "EMV",
    "Encryption key",
    "Ethereum",
    "Expense management",
    "Financial technology",
    "Fraud prevention",
    "Gatekeeper",
    "Gift cards",
    "Google Pay",
    "Hardware wallet",
    "Identity verification",
    "Instalments",
    "Integration",
    "International payments",
    "Invoice management",
    "Issuing bank",
    "KYC",
    "Loyalty program",
    "Mastercard",
    "Merchant",
    "Merchant services",
    "Mobile banking",
    "Mobile wallet",
    "Money laundering",
    "Near field communication",
    "Online marketplace",
    "Order management",
    "Overdraft",
    "PCI-DSS",
    "Payment app",
    "Payment authorization",
    "Payment confirmation",
    "Payment failure",
    "Payment flow",
    "Payment gateway provider",
    "Payment notification",
    "Payment plan",
    "Payment platform",
    "Payment provider",
    "Payment request",
    "Payment reversal",
    "Payment solution",
    "Payment system",
    "PayPal",
    "Peer-to-peer payments",
    "POS",
    "Prepaid card",
    "Processing fee",
    "Reconciliation",
    "Recurring billing",
    "Regulation",
    "Remittance",
    "Risk assessment",
    "SaaS",
    "Secure payment",
    "Security code",
    "SEPA",
    "Stripe",
    "Subscription management",
    "Taxation",
    "Transaction",
    "Transaction ID",
    "Transaction limit",
    "Transaction status",
    "Trust",
    "User authentication",
    "User experience",
    "User interface",
    "User verification",
    "Virtual terminal",
    "Visa",
    "Wallet",
    "Wire transfer",
    // Additional terms:
    "Account statement",
    "Acquirer",
    "Address verification system (AVS)",
    "Agent banking",
    "Algorithmic trading",
    "Alternative lending",
    "ATM",
    "Audit trail",
    "Authentication token",
    "Automated clearing house (ACH)",
    "Balance transfer",
    "Bank identification number (BIN)",
    "Bank reconciliation",
    "Banking regulations",
    "Biometric authentication",
    "Blockchain",
    "Bounced check",
    "Bureau de change",
    "Business-to-business (B2B)",
    "Business-to-consumer (B2C)",
    "Capital markets",
    "Cash flow",
    "Cash register",
    "Charge slip",
    "Check",
    "Commercial card",
    "Compliance",
    "Consumer protection",
    "Contactless card",
    "Conversion rate optimization",
    "Counterfeit",
    "Credit bureau",
    "Credit card authorization",
    "Credit card fraud",
    "Credit limit",
    "Cryptocurrency wallet",
    "CVV",
    "Data breach",
    "Data encryption standard (DES)",
    "Data privacy",
    "Digital certificate",
    "Digital invoice",
    "Digital signature",
    "Discount rate",
    "Dynamic currency conversion (DCC)",
    "E-money",
    "EMV chip",
    "Escrow account",
    "Factoring",
    "Fiat currency",
    "Financial institution",
    "Fintech",
    "Fraudulent transaction",
    "Government regulation",
    "High-risk merchant",
    "Identity theft",
    "Insufficient funds",
    "Interest rate",
    "Invoice financing",
    "Lending",
    "Loan",
    "Machine learning",
    "Marketplace",
    "Microtransaction",
    "Mobile banking app",
    "Mobile POS",
    "Money market",
    "Near-field communication (NFC)",
    "Online fraud",
    "Open banking",
    "Outsourcing",
    "Payment card industry (PCI)",
    "Payment facilitator",
    "Payment gateway provider",
    "Payment processor",
    "Payment schedule",
    "Point of sale (POS)",
    "Preauthorization",
    "Private key",
    "Public key",
    "Purchase protection",
    "Real-time gross settlement (RTGS)",
    "Recurring billing",
    "Regulatory compliance",
    "Remittance service",
    "Secure Sockets Layer (SSL)",
    "Smart card",
    "Standalone terminal",
    "Submerchant",
    "Terminal",
    "Token economy",
    "Transaction dispute",
    "Transaction ID",
    "Transaction processing system",
    "Underwriting",
    "Virtual card",
    "Virtual terminal",
    "White label",
    "Zero liability",
];
