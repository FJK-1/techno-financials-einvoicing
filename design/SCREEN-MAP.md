# UAE E-Invoicing System - Screen Map

**Product**: Techno Financials by 3techno
**Phase**: 1 (MVP)
**Total Screens**: 33
**Compliance**: PINT AE (Peppol-Based), UAE Ministry of Finance
**Architecture**: 5 Corner Model, Cloud-Based

---

## Table of Contents

1. [Authentication](#1-authentication-4-screens)
2. [Subscription & Payment](#2-subscription--payment-2-screens)
3. [Dashboard](#3-dashboard-1-screen)
4. [Master Data](#4-master-data-6-screens)
5. [Invoice Management](#5-invoice-management-8-screens)
6. [Submission & Status](#6-submission--status-3-screens)
7. [Reports](#7-reports-3-screens)
8. [Archive](#8-archive-2-screens)
9. [Settings](#9-settings-4-screens)
10. [Common Components](#10-common-components)
11. [Navigation Flow Summary](#navigation-flow-summary)

---

## 1. Authentication (4 Screens)

### 1.1 Login Page

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | AUTH-01 |
| **Purpose** | Authenticate existing users into the system |
| **Navigation From** | App entry point, Logout, Session expiry redirect |
| **Navigation To** | Dashboard (AUTH-01 -> DASH-01), Registration (AUTH-01 -> AUTH-02), Forgot Password (AUTH-01 -> AUTH-04) |

**Key UI Elements**
- Techno Financials logo and branding
- Email address input field
- Password input field (with show/hide toggle)
- "Remember Me" checkbox
- "Login" primary button
- "Forgot Password?" text link
- "Don't have an account? Sign Up" text link
- Divider with "OR"
- Social login buttons (if applicable in future phases)
- Footer with terms of service and privacy policy links

**User Interactions**
- Enter email and password, then click Login
- Toggle password visibility
- Click "Forgot Password?" to navigate to password recovery
- Click "Sign Up" to navigate to registration
- Receive inline validation errors for invalid credentials
- Redirect to OTP verification if 2FA is enabled

**Data Displayed**
- Validation error messages (invalid email format, wrong credentials)
- Loading spinner during authentication
- System maintenance banner (if applicable)

---

### 1.2 Registration / Signup

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | AUTH-02 |
| **Purpose** | Register a new company account with UAE business details |
| **Navigation From** | Login Page (AUTH-01) |
| **Navigation To** | OTP Verification (AUTH-02 -> AUTH-03) |

**Key UI Elements**
- Techno Financials logo and branding
- Multi-step or single-page form with the following fields:
  - Company Name (text input, required)
  - Trade License Number (text input, required)
  - Tax Registration Number / TRN (text input, required, 15-digit format)
  - Contact Email (email input, required)
  - Mobile Number (phone input with UAE +971 prefix, required)
  - Emirate (dropdown: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah)
  - Password (with strength indicator, required)
  - Confirm Password (required)
- Terms and Conditions checkbox with link to full terms
- "Create Account" primary button
- "Already have an account? Login" text link
- CAPTCHA or bot protection

**User Interactions**
- Fill in all required company and contact details
- Select Emirate from dropdown
- Create a password meeting strength requirements (min 8 chars, uppercase, lowercase, number, special char)
- Accept terms and conditions
- Submit form to proceed to OTP verification
- View real-time field validation (TRN format, email format, password strength)

**Data Displayed**
- Field-level validation messages
- Password strength meter (Weak / Medium / Strong)
- TRN format hint (e.g., "100XXXXXXXXXX")
- Required field indicators

---

### 1.3 OTP Verification

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | AUTH-03 |
| **Purpose** | Verify user identity via one-time password sent to mobile or email |
| **Navigation From** | Registration (AUTH-02), Login with 2FA enabled |
| **Navigation To** | Plan Selection (AUTH-03 -> SUB-01) on first signup, Dashboard (AUTH-03 -> DASH-01) on 2FA login |

**Key UI Elements**
- Verification illustration/icon
- Instruction text indicating where OTP was sent (masked email/phone)
- 6-digit OTP input (individual digit boxes)
- Countdown timer for OTP expiry (e.g., 2:00 minutes)
- "Resend OTP" link (disabled until timer expires)
- "Verify" primary button
- "Change email/phone" link (during registration only)
- "Back to Login" link

**User Interactions**
- Enter 6-digit OTP code
- Auto-advance to next digit box on input
- Click Verify to validate OTP
- Click Resend OTP after timer expires
- Navigate back to change contact details if OTP not received

**Data Displayed**
- Masked email or phone number (e.g., f***@email.com, +971 5X XXX XX89)
- Countdown timer
- Success/error messages
- Resend attempt count (max 3 resends)

---

### 1.4 Forgot Password

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | AUTH-04 |
| **Purpose** | Allow users to reset their password via email verification |
| **Navigation From** | Login Page (AUTH-01) |
| **Navigation To** | Login Page (AUTH-04 -> AUTH-01) after successful reset |

**Key UI Elements**
- Step 1: Email Entry
  - Email input field
  - "Send Reset Link" primary button
  - "Back to Login" link
- Step 2: Confirmation
  - Success message with email sent confirmation
  - "Resend Email" link
  - "Back to Login" link
- Step 3: New Password (via email link)
  - New Password input with strength indicator
  - Confirm Password input
  - "Reset Password" primary button

**User Interactions**
- Enter registered email address
- Receive confirmation that reset link was sent
- Click email link to open password reset form
- Enter and confirm new password
- Submit to reset, then redirect to login

**Data Displayed**
- Masked email confirmation
- Password strength requirements
- Success message on password reset completion
- Error if email not found in system

---

## 2. Subscription & Payment (2 Screens)

### 2.1 Plan Selection

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | SUB-01 |
| **Purpose** | Allow new users to choose a subscription plan after registration |
| **Navigation From** | OTP Verification on signup (AUTH-03), Settings (SET-01) for plan change |
| **Navigation To** | Payment Processing (SUB-01 -> SUB-02) |

**Key UI Elements**
- Billing toggle: Monthly / Yearly (with discount badge on yearly, e.g., "Save 20%")
- Plan cards (2-3 tiers), each showing:
  - Plan name
  - Price (AED/month or AED/year)
  - Feature list with checkmarks/crosses
  - Invoice volume limit
  - Number of users included
  - "Select Plan" button
- Highlighted "Recommended" or "Most Popular" badge on preferred plan
- Feature comparison table (expandable/collapsible)
- "Contact Sales" link for enterprise/custom plans
- Free trial badge (if applicable)

**User Interactions**
- Toggle between monthly and yearly billing
- Compare plan features
- Select a plan to proceed to payment
- Contact sales for custom pricing
- Expand feature comparison table for detailed view

**Data Displayed**
- Plan pricing in AED
- Feature breakdown per plan
- Annual savings percentage
- Current plan indicator (if upgrading/downgrading)

---

### 2.2 Payment Processing

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | SUB-02 |
| **Purpose** | Process subscription payment via integrated payment gateway |
| **Navigation From** | Plan Selection (SUB-01) |
| **Navigation To** | Dashboard (SUB-02 -> DASH-01) on success, Plan Selection (SUB-02 -> SUB-01) on cancel |

**Key UI Elements**
- Order summary sidebar:
  - Selected plan name and billing cycle
  - Price breakdown (subtotal, VAT 5%, total in AED)
  - Promo code input with "Apply" button
- Payment method selection:
  - Credit/Debit Card (Stripe/Telr/PayTabs embedded form)
  - Card number, expiry, CVV, cardholder name
- Billing address fields (optional, depending on gateway)
- "Pay Now" primary button with amount displayed
- "Back" link to plan selection
- Security badges (PCI DSS, SSL, gateway logos)
- Terms of subscription agreement checkbox

**User Interactions**
- Review order summary and pricing
- Enter promo/discount code
- Select payment method
- Enter card details in secure iframe
- Agree to subscription terms
- Click Pay Now to process payment
- View processing spinner during transaction
- Receive success confirmation or error with retry option

**Data Displayed**
- Selected plan details
- Price with VAT calculation
- Discount (if promo applied)
- Payment processing status
- Success confirmation with receipt number
- Error messages (card declined, network error)

---

## 3. Dashboard (1 Screen)

### 3.1 Main Dashboard

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | DASH-01 |
| **Purpose** | Provide a real-time overview of e-invoicing activity, KPIs, and submission status |
| **Navigation From** | Login (AUTH-01), Sidebar navigation, Top logo click |
| **Navigation To** | Invoice List (DASH-01 -> INV-01), Reports (DASH-01 -> RPT-01), any sidebar destination |

**Key UI Elements**
- **KPI Cards Row** (7 cards):
  1. Upload Invoices (total count with trend arrow)
  2. Errors in Records (count, red highlight if > 0)
  3. Ready to Submit (count, actionable)
  4. Withdrawn (count)
  5. Delivered to FTA - C5 (count with percentage)
  6. Delivered to Buyer - C4 (count with percentage)
  7. Delivered to Both (count, green highlight)
- **Pie Chart**: Invoice Status Distribution (Draft, Validated, Submitted, Cleared, Rejected, Reported)
- **Bar Chart**: Monthly Submission Trend (last 6-12 months, stacked by status)
- **Line Graph**: FTA Acceptance Rate over time (percentage)
- **Date Range Selector**: Preset options (Today, This Week, This Month, This Quarter, Custom Range)
- **Filter Bar**: Emirate, Invoice Type, Status
- **Recent Activity Feed**: Scrollable list of latest actions (invoice created, submitted, cleared, rejected) with timestamps
- **Quick Actions**: "Create Invoice" button, "Upload CSV" button

**User Interactions**
- Click any KPI card to navigate to filtered Invoice List
- Hover over charts for tooltips with exact values
- Change date range to update all dashboard data
- Apply filters to narrow dashboard view
- Click items in the activity feed to view invoice details
- Use quick action buttons for common tasks
- Refresh dashboard data manually

**Data Displayed**
- Real-time invoice counts by status
- Trend indicators (up/down arrows with percentages)
- Chart visualizations with interactive tooltips
- Timestamped activity log
- Last data refresh timestamp
- Welcome message with company name

---

## 4. Master Data (6 Screens)

### 4.1 Seller Profile

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | MD-01 |
| **Purpose** | View and edit the seller (company) profile, auto-populated from registration |
| **Navigation From** | Sidebar > Master Data > Seller Profile, Settings (SET-01) |
| **Navigation To** | Stays on same page (edit mode toggle) |

**Key UI Elements**
- Profile header with company logo upload area
- View/Edit mode toggle button
- Form sections:
  - **Business Details**: Company Name, Trade License No., TRN, Legal Registration Name, Business Activity
  - **Address**: Building, Street, District, City, Emirate, PO Box, Country (UAE pre-selected)
  - **Contact Information**: Phone, Email, Website
  - **Banking Details**: Bank Name, IBAN, Account Name, Swift Code
  - **Tax Details**: VAT Group (if applicable), Tax Scheme (VAT)
- "Save Changes" primary button (in edit mode)
- "Cancel" secondary button (in edit mode)
- Last updated timestamp
- Profile completeness indicator (percentage bar)

**User Interactions**
- Toggle between view and edit mode
- Upload or change company logo
- Edit any pre-populated field from registration
- Save changes with confirmation dialog
- View profile completeness and fill missing fields
- Fields like TRN are read-only after initial verification

**Data Displayed**
- All seller/company information
- Profile completeness percentage
- Last modified date and user
- Validation warnings for incomplete required fields

---

### 4.2 Buyer List

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | MD-02 |
| **Purpose** | Display all registered buyers with search, filter, and management options |
| **Navigation From** | Sidebar > Master Data > Buyers |
| **Navigation To** | Buyer Create/Edit Form (MD-02 -> MD-03), Invoice Create (MD-02 -> INV-02) |

**Key UI Elements**
- Page title: "Buyers" with buyer count badge
- "Add Buyer" primary button
- "Import Buyers" secondary button (CSV/Excel)
- Search bar (search by name, TRN, email)
- Filter dropdowns: Emirate, Status (Active/Inactive), Category
- Data table columns:
  - Buyer Name
  - TRN
  - Email
  - Emirate
  - Phone
  - Invoice Count
  - Status (Active/Inactive badge)
  - Actions (Edit, View, Deactivate, Delete)
- Pagination controls (rows per page: 10, 25, 50)
- Bulk action bar (select all, bulk delete, bulk export)
- Sort controls on column headers

**User Interactions**
- Search buyers by name, TRN, or email
- Filter list by emirate, status, or category
- Sort table by any column
- Click "Add Buyer" to open creation form
- Click a buyer row to view details
- Click Edit icon to modify buyer
- Click Delete with confirmation dialog
- Select multiple buyers for bulk actions
- Import buyers from CSV/Excel file
- Change pagination settings
- Export buyer list to CSV

**Data Displayed**
- Paginated buyer records
- Total buyer count
- Status indicators per buyer
- Invoice count linked to each buyer
- Empty state message when no buyers exist

---

### 4.3 Buyer Create/Edit Form

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | MD-03 |
| **Purpose** | Add a new buyer or edit an existing buyer's details |
| **Navigation From** | Buyer List (MD-02), Invoice Creation buyer selection |
| **Navigation To** | Buyer List (MD-03 -> MD-02) on save/cancel |

**Key UI Elements**
- Page title: "Add Buyer" or "Edit Buyer: [Name]"
- Form sections:
  - **Business Details**: Buyer Name (required), TRN (required, 15-digit), Registration Name, Business Activity
  - **Address**: Building, Street, District, City, Emirate (dropdown), PO Box, Country (dropdown with UAE default)
  - **Contact**: Contact Person Name, Phone (with country code), Email, Website
  - **Banking**: Bank Name, IBAN, Account Name
  - **Additional**: Notes, Category/Tags, Default Payment Terms
- "Save" primary button
- "Save & Add Another" secondary button (create mode only)
- "Cancel" link
- Form-level and field-level validation messages

**User Interactions**
- Fill in buyer details across all sections
- TRN auto-format as user types (XXX-XXXX-XXXXXXX-X)
- Select Emirate and Country from dropdowns
- Save buyer and return to list
- Save and immediately add another buyer
- Cancel to discard changes and return to list
- View validation errors on submit

**Data Displayed**
- Pre-filled data in edit mode
- TRN validation status (format check)
- Required field indicators
- Success toast notification on save

---

### 4.4 Item/Product List

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | MD-04 |
| **Purpose** | Display all product/service items for use in invoice line items |
| **Navigation From** | Sidebar > Master Data > Items |
| **Navigation To** | Item Create/Edit Form (MD-04 -> MD-05), Import Data (MD-04 -> MD-06) |

**Key UI Elements**
- Page title: "Items / Products" with item count badge
- "Add Item" primary button
- "Import Items" secondary button
- Search bar (search by name, SKU, description)
- Filter dropdowns: Category, Tax Category (Standard, Zero-Rated, Exempt), Status
- Data table columns:
  - Item Code / SKU
  - Item Name / Description
  - Unit of Measure (UOM)
  - Unit Price (AED)
  - Tax Category
  - VAT Rate (%)
  - Status (Active/Inactive)
  - Actions (Edit, Duplicate, Deactivate, Delete)
- Pagination controls
- Bulk actions bar

**User Interactions**
- Search items by name, SKU, or description
- Filter by category, tax category, or status
- Sort by any column
- Click "Add Item" to create new item
- Click item row to view details
- Edit, duplicate, or delete items
- Import items from CSV/Excel
- Export item catalog
- Bulk select and manage items

**Data Displayed**
- Paginated item/product records
- Total item count
- Pricing in AED
- Tax category badges
- Empty state with "Add your first item" prompt

---

### 4.5 Item/Product Create/Edit Form

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | MD-05 |
| **Purpose** | Add a new item/product or edit an existing one for use in invoices |
| **Navigation From** | Item List (MD-04), Invoice line item quick-add |
| **Navigation To** | Item List (MD-05 -> MD-04) on save/cancel |

**Key UI Elements**
- Page title: "Add Item" or "Edit Item: [Name]"
- Form fields:
  - Item Code / SKU (text, optional auto-generate)
  - Item Name (text, required)
  - Description (textarea)
  - Unit of Measure / UOM (dropdown: Each, Box, KG, Litre, Hour, etc.)
  - Unit Price (number input, AED, required)
  - Tax Category (dropdown: Standard Rate, Zero Rate, Exempt, Reverse Charge)
  - VAT Rate (auto-filled based on tax category: 5%, 0%, N/A)
  - Category / Group (dropdown or tags)
  - Discount Default (percentage or fixed amount)
  - Status (Active/Inactive toggle)
  - Notes (textarea)
- "Save" primary button
- "Save & Add Another" secondary button
- "Cancel" link

**User Interactions**
- Enter item details
- Select UOM from standardized dropdown
- Select tax category (VAT rate auto-populates)
- Toggle active/inactive status
- Save and return to list or save and add another
- Cancel to discard

**Data Displayed**
- Pre-filled data in edit mode
- Auto-calculated VAT rate based on tax category
- Required field indicators
- Validation messages

---

### 4.6 Import Data

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | MD-06 |
| **Purpose** | Bulk import buyers or items via CSV/Excel file upload |
| **Navigation From** | Buyer List (MD-02), Item List (MD-04) |
| **Navigation To** | Buyer List (MD-06 -> MD-02) or Item List (MD-06 -> MD-04) after import |

**Key UI Elements**
- Import type selector: Buyers / Items
- Step indicator (1. Upload, 2. Map Fields, 3. Review, 4. Import)
- **Step 1 - Upload**:
  - Drag-and-drop zone for file upload
  - Supported formats note: CSV, XLSX
  - "Download Template" link for each import type
  - File size limit notice
- **Step 2 - Map Fields**:
  - Two-column mapping table (Source Column -> System Field)
  - Auto-mapping with manual override dropdowns
  - Preview of first 3 rows
- **Step 3 - Review**:
  - Total records count
  - Valid records count (green)
  - Records with errors count (red) with expandable error details
  - "Download Error Report" link
- **Step 4 - Import**:
  - Progress bar
  - Success summary (X imported, Y skipped, Z errors)
- "Next" / "Back" / "Cancel" navigation buttons

**User Interactions**
- Select import type (Buyers or Items)
- Upload CSV or Excel file via drag-and-drop or file browser
- Download template files for reference
- Map source columns to system fields
- Review and resolve validation errors
- Proceed with import or cancel
- Download error report for failed records

**Data Displayed**
- Upload progress
- Column mapping suggestions
- Data preview (first 3 rows)
- Validation results summary
- Import progress and completion summary
- Error details per record

---

## 5. Invoice Management (8 Screens)

### 5.1 Invoice List

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | INV-01 |
| **Purpose** | Central view of all invoices with filtering, search, and status management |
| **Navigation From** | Sidebar > Invoices, Dashboard KPI cards (DASH-01) |
| **Navigation To** | Create Invoice (INV-01 -> INV-02), Invoice Preview (INV-01 -> INV-03), Invoice Edit (INV-01 -> INV-05), Credit Note (INV-01 -> INV-07), Debit Note (INV-01 -> INV-08) |

**Key UI Elements**
- Page title: "Invoices" with total count
- "Create Invoice" primary button
- "Import Invoices" secondary button
- Search bar (search by invoice number, buyer name, TRN)
- **Filter Bar**:
  - Status tabs: All, Draft, Validated, Submitted, Cleared, Rejected, Reported, Withdrawn
  - Invoice Type: Standard Tax, Credit Note, Debit Note, Self-Billing
  - Date Range picker (issue date)
  - Buyer dropdown
  - Amount range (min/max)
- Data table columns:
  - Checkbox (for bulk actions)
  - Invoice Number
  - Invoice Date
  - Buyer Name
  - Invoice Type
  - Total Amount (AED)
  - VAT Amount (AED)
  - Status (color-coded badge)
  - Submission Date
  - FTA Reference
  - Actions (View, Edit, Submit, Clone, Delete, Credit Note)
- Pagination controls
- Bulk actions: Submit Selected, Export, Delete
- Summary footer row: Total Amount, Total VAT for current page/filter

**User Interactions**
- Search invoices by number, buyer, or TRN
- Filter by status, type, date range, buyer, or amount
- Sort by any column
- Click invoice row to open preview
- Click Edit to modify draft invoices
- Click Submit to send validated invoices to ASP
- Clone an existing invoice
- Create credit note against an existing invoice
- Select multiple invoices for bulk submission
- Export filtered list to CSV/Excel/PDF
- Delete draft invoices with confirmation

**Data Displayed**
- Paginated invoice records with all key fields
- Status badges with color coding:
  - Draft (grey), Validated (blue), Submitted (yellow), Cleared (green), Rejected (red), Reported (purple), Withdrawn (orange)
- Total and VAT summary
- Empty state: "No invoices yet. Create your first invoice."

---

### 5.2 Create Invoice (Multi-Section Form)

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | INV-02 |
| **Purpose** | Create a new PINT AE compliant invoice with all required sections |
| **Navigation From** | Invoice List (INV-01), Dashboard quick action (DASH-01) |
| **Navigation To** | Invoice Preview (INV-02 -> INV-03), Invoice Validation (INV-02 -> INV-04), Invoice List (INV-02 -> INV-01) on save as draft |

**Key UI Elements**

**Section Navigation**: Horizontal stepper or vertical tab bar showing all 6 sections with completion indicators.

**Section 1 - Invoice Details**:
- Invoice Number (auto-generated or manual)
- Invoice Issue Date (date picker, default today)
- Invoice Due Date (date picker)
- Invoice Type (dropdown: Standard Tax Invoice 388, Credit Note 381, Debit Note 383)
- Invoice Sub-Type / Use Case (dropdown: Standard, Reverse Charge, Zero-Rated, Deemed Supply, etc.)
- Currency (dropdown, default AED)
- Purchase Order Reference (optional)
- Contract Reference (optional)
- Payment Terms (dropdown or text)
- Payment Means (dropdown: Cash, Bank Transfer, Card, etc.)
- Notes / Remarks (textarea)

**Section 2 - Seller Details** (auto-filled from Seller Profile):
- Seller Name (read-only)
- Seller TRN (read-only)
- Seller Address (read-only)
- Seller Contact (read-only)
- "Edit in Seller Profile" link

**Section 3 - Buyer Details**:
- Buyer selection dropdown/search (from Master Data)
- "Add New Buyer" quick-add button
- Selected buyer details displayed:
  - Buyer Name, TRN, Address, Contact
- Override fields for one-time changes

**Section 4 - Document Totals** (auto-calculated):
- Subtotal (sum of line items before tax)
- Total Allowances/Charges
- Total Taxable Amount
- Total VAT Amount
- Total Amount with VAT
- Rounding Amount (if applicable)
- Amount Due (after prepayments)
- All fields are read-only, calculated from line items

**Section 5 - Tax Breakdown** (auto-calculated):
- Tax summary table:
  - Tax Category (Standard, Zero-Rated, Exempt, Reverse Charge)
  - Taxable Amount per category
  - VAT Rate per category
  - VAT Amount per category
- Total tax amount

**Section 6 - Line Items**:
- "Add Line Item" button
- "Add from Item Master" button (opens item picker modal)
- Line item table (inline editable):
  - Row number
  - Item Name / Description (required)
  - Quantity (number, required)
  - Unit of Measure (dropdown)
  - Unit Price (AED, required)
  - Discount (% or fixed amount)
  - Tax Category (dropdown)
  - VAT Rate (auto-filled, %)
  - Net Amount (auto-calculated)
  - VAT Amount (auto-calculated)
  - Gross Amount (auto-calculated)
  - Delete row button
- Drag-to-reorder rows
- Line item subtotal footer

**Form Actions**:
- "Save as Draft" secondary button
- "Validate" primary button (runs validation rules)
- "Cancel" link
- Auto-save indicator

**User Interactions**
- Navigate between sections via stepper/tabs
- Auto-populated seller details from profile
- Search and select buyer from master data
- Quick-add a new buyer inline
- Add line items manually or from item master
- Edit line item quantities, prices, discounts
- Watch totals and tax auto-calculate in real-time
- Save as draft at any point
- Validate invoice to check PINT AE compliance
- Receive section-level completion indicators

**Data Displayed**
- Auto-generated invoice number
- Auto-filled seller information
- Selected buyer details
- Real-time calculated totals and tax breakdowns
- Section completion status (complete/incomplete icons)
- Auto-save status indicator

---

### 5.3 Invoice Preview

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | INV-03 |
| **Purpose** | Display a formatted, print-ready preview of the invoice with QR code |
| **Navigation From** | Create Invoice (INV-02), Invoice List (INV-01), Invoice Edit (INV-05) |
| **Navigation To** | Invoice Edit (INV-03 -> INV-05), Invoice PDF (INV-03 -> INV-06), Submission Queue (INV-03 -> STS-01), Invoice List (INV-03 -> INV-01) |

**Key UI Elements**
- Formatted invoice document layout:
  - Company logo and header
  - Invoice number, date, due date
  - Seller details block (left)
  - Buyer details block (right)
  - Line items table with descriptions, quantities, prices, tax
  - Tax summary section
  - Document totals section
  - Payment terms and bank details
  - Notes/remarks
  - QR code (ZATCA/FTA compliant, containing invoice hash)
- Status badge (Draft, Validated, Submitted, etc.)
- Action buttons:
  - "Edit" (if Draft)
  - "Validate" (if Draft)
  - "Submit to ASP" (if Validated)
  - "Download PDF"
  - "Print"
  - "Send via Email"
  - "Create Credit Note" (if Cleared/Reported)
  - "Clone Invoice"
- XML preview toggle (for technical users)

**User Interactions**
- Review complete invoice layout
- Download as PDF
- Print invoice
- Send invoice via email to buyer
- Edit invoice (if still in Draft)
- Submit validated invoice to ASP
- Toggle XML view for PINT AE compliance review
- Clone invoice to create a new one with same details
- Create credit note against this invoice

**Data Displayed**
- Complete formatted invoice with all sections
- QR code encoding invoice details
- Current status with timestamp
- Submission history (if submitted)
- FTA reference number (if cleared)

---

### 5.4 Invoice Validation Results

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | INV-04 |
| **Purpose** | Display PINT AE validation results with errors, warnings, and compliance status |
| **Navigation From** | Create Invoice validate action (INV-02), Invoice Edit validate action (INV-05) |
| **Navigation To** | Invoice Edit (INV-04 -> INV-05) to fix errors, Invoice Preview (INV-04 -> INV-03) if valid, Submission Queue (INV-04 -> STS-01) to submit |

**Key UI Elements**
- Validation status header:
  - "Passed" (green checkmark) or "Failed" (red X) with count summary
- Summary bar: X Errors, Y Warnings, Z Info messages
- Validation results list grouped by category:
  - **Structural Validation**: XML schema compliance
  - **Business Rules**: PINT AE rule checks (BR-AE-XX)
  - **Tax Validation**: VAT calculations, rate correctness
  - **Mandatory Fields**: Required field completeness
  - **Cross-Field**: Conditional field checks
  - **Format Validation**: TRN format, date formats, currency codes
- Each result item shows:
  - Severity icon (Error/Warning/Info)
  - Rule ID (e.g., BR-AE-01)
  - Rule description
  - Field reference
  - Current value vs expected value
  - "Go to field" link
- Action buttons:
  - "Fix Errors" (navigates to edit with errors highlighted)
  - "Submit Anyway" (only if no errors, warnings only)
  - "Download Validation Report"
  - "Back to Invoice"

**User Interactions**
- Review all validation results
- Click "Go to field" to jump to the problematic field in the edit form
- Click "Fix Errors" to return to edit mode with errors highlighted
- Download validation report for records
- Submit invoice if validation passed
- Expand/collapse validation categories

**Data Displayed**
- Total validation checks performed
- Pass/fail counts by severity
- Detailed rule descriptions and field references
- PINT AE rule IDs for compliance reference
- Suggested fixes for common errors

---

### 5.5 Invoice Edit

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | INV-05 |
| **Purpose** | Edit an existing draft invoice or fix validation errors |
| **Navigation From** | Invoice List (INV-01), Invoice Preview (INV-03), Invoice Validation (INV-04) |
| **Navigation To** | Invoice Preview (INV-05 -> INV-03), Invoice Validation (INV-05 -> INV-04), Invoice List (INV-05 -> INV-01) |

**Key UI Elements**
- Same form layout as Create Invoice (INV-02)
- All fields pre-populated with existing invoice data
- Validation error highlights on fields that failed validation (red border + error message)
- Error summary panel (collapsible sidebar) listing all validation errors with links
- "Save" primary button
- "Validate" button
- "Cancel" link
- Change tracking indicator (unsaved changes warning)

**User Interactions**
- All interactions from Create Invoice (INV-02) apply
- Fields with validation errors are highlighted and scrolled to
- Click error in summary panel to jump to field
- Save changes to update draft
- Re-validate after fixing errors
- Unsaved changes warning on navigation away

**Data Displayed**
- Pre-populated invoice data
- Validation error indicators on specific fields
- Error summary panel
- Change history (last edited by, timestamp)

---

### 5.6 Invoice PDF View

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | INV-06 |
| **Purpose** | Display and allow download of the generated PDF version of an invoice |
| **Navigation From** | Invoice Preview (INV-03), Invoice List (INV-01) download action |
| **Navigation To** | Invoice Preview (INV-06 -> INV-03), Invoice List (INV-06 -> INV-01) |

**Key UI Elements**
- Embedded PDF viewer (in-browser)
- PDF toolbar:
  - Zoom in/out controls
  - Page navigation (if multi-page)
  - Download button
  - Print button
  - Email/Share button
- Invoice status watermark on PDF (DRAFT, CLEARED, etc.)
- PDF metadata: generation date, file size

**User Interactions**
- View PDF inline in browser
- Zoom in/out for readability
- Navigate pages
- Download PDF to local device
- Print directly from viewer
- Share/email PDF
- Close viewer to return to previous screen

**Data Displayed**
- Full invoice in PDF format
- QR code embedded in PDF
- Status watermark
- Digital signature details (if signed)

---

### 5.7 Credit Note Creation

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | INV-07 |
| **Purpose** | Create a credit note linked to an original invoice for corrections or returns |
| **Navigation From** | Invoice List (INV-01) action menu, Invoice Preview (INV-03) |
| **Navigation To** | Invoice Preview (INV-07 -> INV-03), Invoice List (INV-07 -> INV-01) |

**Key UI Elements**
- Same multi-section form as Create Invoice (INV-02) with modifications:
  - Invoice Type auto-set to "Credit Note (381)"
  - **Original Invoice Reference** (required):
    - Original invoice number (auto-filled from source)
    - Original invoice date
    - Reason for credit note (dropdown: Return, Pricing Error, Quantity Adjustment, Cancelled, Other)
    - Additional notes
  - Seller and Buyer auto-filled from original invoice (read-only)
  - Line items pre-filled from original (quantities as negative or adjustment amounts)
  - Option to credit full invoice or partial (specific line items)
- "Full Credit" toggle (credits entire original invoice)
- "Partial Credit" mode (select/adjust specific lines)
- Totals show as negative amounts

**User Interactions**
- Select original invoice to credit against
- Choose full or partial credit
- Adjust line item quantities/amounts for partial credit
- Add reason for credit note
- Validate and save as draft
- Submit credit note

**Data Displayed**
- Original invoice reference details
- Pre-populated line items from original
- Negative amounts for credited items
- Adjusted totals and tax calculations
- Reason for credit note

---

### 5.8 Debit Note Creation

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | INV-08 |
| **Purpose** | Create a debit note linked to an original invoice for additional charges |
| **Navigation From** | Invoice List (INV-01) action menu, Invoice Preview (INV-03) |
| **Navigation To** | Invoice Preview (INV-08 -> INV-03), Invoice List (INV-08 -> INV-01) |

**Key UI Elements**
- Same multi-section form as Create Invoice (INV-02) with modifications:
  - Invoice Type auto-set to "Debit Note (383)"
  - **Original Invoice Reference** (required):
    - Original invoice number (auto-filled from source)
    - Original invoice date
    - Reason for debit note (dropdown: Undercharged, Additional Services, Price Increase, Other)
    - Additional notes
  - Seller and Buyer auto-filled from original invoice
  - Line items for additional charges (positive amounts)
- Totals show additional amounts due

**User Interactions**
- Select original invoice to debit against
- Add additional charge line items
- Provide reason for debit note
- Validate and save as draft
- Submit debit note

**Data Displayed**
- Original invoice reference details
- Additional charge line items
- Supplementary totals and tax
- Reason for debit note

---

## 6. Submission & Status (3 Screens)

### 6.1 Submission Queue

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | STS-01 |
| **Purpose** | View and manage invoices pending validation and ASP submission |
| **Navigation From** | Sidebar > Submissions, Dashboard (DASH-01), Invoice Validation (INV-04) |
| **Navigation To** | ASP Submission Status (STS-01 -> STS-02), Invoice Preview (STS-01 -> INV-03), Invoice Validation (STS-01 -> INV-04) |

**Key UI Elements**
- Page title: "Submission Queue" with pending count
- Status tabs: Pending Validation, Validated (Ready to Submit), Submitting, Failed
- Queue table columns:
  - Checkbox (for bulk selection)
  - Invoice Number
  - Invoice Date
  - Buyer Name
  - Total Amount (AED)
  - Invoice Type
  - Validation Status (icon: Passed/Failed/Pending)
  - Queue Status (Pending, Processing, Failed)
  - Queued At (timestamp)
  - Actions (Submit, Remove, View, Re-validate)
- "Submit All Ready" primary button
- "Submit Selected" secondary button
- "Re-validate All" button
- Batch submission progress indicator
- Auto-refresh toggle

**User Interactions**
- View all invoices in submission pipeline
- Filter by queue status
- Select individual or multiple invoices for submission
- Submit all validated invoices at once
- Re-validate failed invoices
- Remove invoices from queue
- View submission progress in real-time
- Toggle auto-refresh for live updates

**Data Displayed**
- Queued invoice details
- Validation status per invoice
- Submission progress (X of Y submitted)
- Error messages for failed submissions
- Queue timestamps
- Batch submission progress bar

---

### 6.2 ASP Submission Status

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | STS-02 |
| **Purpose** | Track the status of invoices submitted to the Accredited Service Provider and FTA |
| **Navigation From** | Submission Queue (STS-01), Sidebar > Submissions > Status, Dashboard (DASH-01) |
| **Navigation To** | Status Detail View (STS-02 -> STS-03), Invoice Preview (STS-02 -> INV-03) |

**Key UI Elements**
- Page title: "Submission Status"
- Status filter tabs: All, Pending, Validated by ASP, Rejected by ASP, Cleared by FTA (C5), Delivered to Buyer (C4), Reported
- Search bar (invoice number, buyer name)
- Date range filter
- Status table columns:
  - Invoice Number
  - Invoice Date
  - Buyer Name
  - Total Amount (AED)
  - Submitted At
  - ASP Status (badge)
  - FTA Status (badge)
  - Acknowledgment ID
  - Last Updated
  - Actions (View Details, Resubmit, Withdraw)
- Status flow indicator: Submitted -> ASP Validated -> FTA Cleared (C5) -> Delivered to Buyer (C4)
- Auto-refresh with polling interval
- Export status report

**User Interactions**
- Filter submissions by status
- Search for specific invoices
- Click row to view detailed status
- Resubmit rejected invoices after correction
- Withdraw pending submissions
- Export status report
- View real-time status updates

**Data Displayed**
- Submission tracking details
- ASP and FTA status with timestamps
- Acknowledgment and reference numbers
- Status flow visualization
- Rejection reasons (if applicable)
- Time elapsed in each status

---

### 6.3 Status Detail View

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | STS-03 |
| **Purpose** | Show detailed submission history, FTA response, and rejection reasons for a single invoice |
| **Navigation From** | ASP Submission Status (STS-02), Invoice Preview (INV-03) |
| **Navigation To** | Invoice Preview (STS-03 -> INV-03), Invoice Edit (STS-03 -> INV-05) for resubmission |

**Key UI Elements**
- Invoice header: Invoice Number, Buyer Name, Total Amount, Current Status badge
- **Status Timeline** (vertical timeline):
  - Invoice Created (timestamp, user)
  - Validated (timestamp, validation result)
  - Submitted to ASP (timestamp, submission ID)
  - ASP Acknowledgment (timestamp, acknowledgment ID)
  - ASP Validation Result (timestamp, pass/fail)
  - FTA Clearance - C5 (timestamp, FTA clearance number)
  - Delivered to Buyer - C4 (timestamp, delivery confirmation)
  - Each step shows: status icon, timestamp, details
- **Rejection Details** (if rejected):
  - Rejection code
  - Rejection reason description
  - Rejected fields/values
  - Suggested corrective actions
- **Reference Numbers**:
  - Internal Submission ID
  - ASP Acknowledgment ID
  - FTA Clearance Number
  - UUID
- Action buttons:
  - "View Invoice" (opens preview)
  - "Edit & Resubmit" (if rejected)
  - "Download XML" (submitted XML)
  - "Download Response" (ASP/FTA response)
  - "Withdraw" (if pending)

**User Interactions**
- Review full submission timeline
- View rejection reasons and suggested fixes
- Navigate to invoice for editing and resubmission
- Download submitted XML and response documents
- Withdraw a pending submission
- Copy reference numbers

**Data Displayed**
- Complete submission lifecycle timeline
- All reference numbers and IDs
- Rejection details with corrective guidance
- Response XML/documents
- Time elapsed between each status change

---

## 7. Reports (3 Screens)

### 7.1 Report Dashboard / Index

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | RPT-01 |
| **Purpose** | Central hub listing all 29 available report types organized by category |
| **Navigation From** | Sidebar > Reports |
| **Navigation To** | Report Generator (RPT-01 -> RPT-02) |

**Key UI Elements**
- Page title: "Reports"
- Search bar for reports
- Report categories (cards or accordion sections):
  - **Submission Reports**: Submission Summary, Submission by Status, Submission by Date, Submission by Buyer, Resubmission Report
  - **Tax Reports**: VAT Summary, VAT by Category, Tax Breakdown by Period, Reverse Charge Summary, Zero-Rated Summary
  - **Financial Reports**: Revenue Summary, Outstanding Payments, Aging Report, Currency Summary
  - **Compliance Reports**: FTA Clearance Report, Rejection Analysis, Acceptance Rate Trend, Compliance Score
  - **Operational Reports**: User Activity, Audit Trail, System Performance, API Usage
  - **Master Data Reports**: Buyer Analysis, Item Usage, Data Quality
  - **Archive Reports**: Archived Invoice Summary, Retention Status
  - **Custom Reports**: Saved custom reports list
- Each report card shows:
  - Report name
  - Brief description
  - Last generated date
  - "Generate" button
  - "Schedule" option (future phase)
- "Saved Reports" section (previously generated reports)
- Quick access to frequently used reports

**User Interactions**
- Browse reports by category
- Search for specific report
- Click "Generate" to open report generator with preset
- Access previously saved/generated reports
- Mark reports as favorites for quick access
- View report descriptions to understand content

**Data Displayed**
- 29 report types organized by category
- Report descriptions
- Last generated timestamps
- Favorite/pinned reports
- Saved report list

---

### 7.2 Report Generator

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | RPT-02 |
| **Purpose** | Configure report parameters, filters, and output format before generation |
| **Navigation From** | Report Dashboard (RPT-01) |
| **Navigation To** | Report Viewer (RPT-02 -> RPT-03), Report Dashboard (RPT-02 -> RPT-01) on cancel |

**Key UI Elements**
- Report name header (based on selected report type)
- **Filter Section**:
  - Date Range (From/To date pickers, presets: This Month, Last Month, This Quarter, This Year, Custom)
  - Status filter (multi-select: Draft, Validated, Submitted, Cleared, Rejected, etc.)
  - Buyer filter (multi-select dropdown)
  - Invoice Type filter (multi-select)
  - Emirate filter (multi-select)
  - Tax Category filter
  - Amount Range (min/max)
- **Grouping Options**:
  - Group by: Date (Day/Week/Month/Quarter), Buyer, Status, Type, Emirate
  - Sub-group option
- **Output Format Selection**:
  - View in browser (default)
  - PDF export
  - Excel/CSV export
  - Scheduled email delivery (future)
- **Column Selection** (for tabular reports):
  - Available columns checklist
  - Drag-to-reorder columns
- "Generate Report" primary button
- "Save Report Configuration" secondary button
- "Reset Filters" link
- "Cancel" link

**User Interactions**
- Select date range using presets or custom dates
- Apply multiple filters
- Choose grouping and sorting options
- Select output format
- Customize visible columns
- Generate report
- Save filter configuration for reuse
- Reset all filters to defaults

**Data Displayed**
- Selected report type description
- Filter options with counts (e.g., "Buyers (43)")
- Preview of column selection
- Estimated record count based on filters

---

### 7.3 Report Viewer

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | RPT-03 |
| **Purpose** | Display generated report data in tabular and visual formats with export options |
| **Navigation From** | Report Generator (RPT-02) |
| **Navigation To** | Report Generator (RPT-03 -> RPT-02) to modify, Report Dashboard (RPT-03 -> RPT-01) |

**Key UI Elements**
- Report header: Report name, date range, generation timestamp
- **Summary Cards**: Key metrics relevant to the report (totals, counts, averages)
- **Chart Section** (where applicable):
  - Bar charts, line charts, pie charts based on report type
  - Chart type switcher
  - Interactive tooltips
- **Data Table**:
  - Sortable columns
  - Grouped rows (expandable/collapsible)
  - Row highlighting
  - Pagination
  - Column totals in footer
- **Export Bar**:
  - "Export to PDF" button
  - "Export to Excel" button
  - "Export to CSV" button
  - "Print" button
  - "Email Report" button
- "Modify Report" link (returns to generator with current filters)
- "Save Report" button

**User Interactions**
- Switch between chart types
- Sort table columns
- Expand/collapse grouped data
- Hover over charts for details
- Export in multiple formats
- Print report directly
- Email report to stakeholders
- Modify filters and regenerate
- Save report for future access

**Data Displayed**
- Summary metrics and KPIs
- Visual charts and graphs
- Detailed tabular data
- Column totals and subtotals
- Applied filters summary
- Record count and page info
- Generation timestamp

---

## 8. Archive (2 Screens)

### 8.1 Archive Browser

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | ARC-01 |
| **Purpose** | Browse and search archived invoices with retention policy compliance (7-year UAE requirement) |
| **Navigation From** | Sidebar > Archive |
| **Navigation To** | Archived Invoice View (ARC-01 -> ARC-02) |

**Key UI Elements**
- Page title: "Invoice Archive" with total archived count
- Search bar (invoice number, buyer name, TRN)
- **Filter Panel**:
  - Date Range (archived date or invoice date)
  - Year selector (for quick year navigation)
  - Invoice Type
  - Buyer
  - Status at time of archival
  - Amount range
- Archive table columns:
  - Invoice Number
  - Invoice Date
  - Buyer Name
  - Total Amount (AED)
  - Invoice Type
  - Final Status
  - Archived Date
  - Retention Expires
  - Actions (View, Download PDF, Download XML)
- Pagination controls
- Storage usage indicator
- Retention policy notice ("Invoices retained for 7 years per UAE regulations")
- Export archive list

**User Interactions**
- Search archived invoices
- Filter by date, year, type, buyer
- Sort by any column
- Click row to view archived invoice
- Download PDF or XML of archived invoice
- Export archive listing
- View retention expiry dates

**Data Displayed**
- Archived invoice records
- Retention expiry dates
- Storage usage statistics
- Total archived invoice count
- Compliance status (all retained within policy)

---

### 8.2 Archived Invoice View

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | ARC-02 |
| **Purpose** | Read-only view of an archived invoice with full details and submission history |
| **Navigation From** | Archive Browser (ARC-01) |
| **Navigation To** | Archive Browser (ARC-02 -> ARC-01) |

**Key UI Elements**
- Read-only invoice preview (same layout as INV-03 but non-editable)
- "ARCHIVED" watermark/badge
- Archive metadata:
  - Archived date
  - Archived by (system/user)
  - Retention expiry date
  - Digital signature verification status
- Submission history timeline (same as STS-03)
- Action buttons:
  - "Download PDF"
  - "Download XML"
  - "Download Signed Copy"
  - "Print"
  - "Back to Archive"
- Integrity verification badge (hash check passed/failed)

**User Interactions**
- View archived invoice details (read-only)
- View submission history timeline
- Download in various formats
- Print archived invoice
- Verify document integrity
- Navigate back to archive browser

**Data Displayed**
- Complete invoice details (read-only)
- QR code
- Submission timeline
- Archive metadata
- Digital signature and integrity status
- All reference numbers (FTA, ASP, UUID)

---

## 9. Settings (4 Screens)

### 9.1 Company Settings

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | SET-01 |
| **Purpose** | Manage company-wide settings, branding, and subscription details |
| **Navigation From** | Sidebar > Settings > Company |
| **Navigation To** | Plan Selection (SET-01 -> SUB-01) for plan changes, Seller Profile (SET-01 -> MD-01) |

**Key UI Elements**
- **Subscription Section**:
  - Current plan name and tier
  - Billing cycle (Monthly/Yearly)
  - Next billing date
  - Invoice usage (X of Y this month)
  - "Change Plan" button
  - "View Billing History" link
  - Payment method on file (last 4 digits)
  - "Update Payment Method" link
- **Branding Section**:
  - Company logo upload
  - Invoice template color scheme picker
  - Custom invoice footer text
- **Defaults Section**:
  - Default currency (AED)
  - Default payment terms
  - Default payment means
  - Invoice number prefix/format
  - Auto-numbering toggle
- **Localization**:
  - Language (English/Arabic)
  - Date format
  - Number format
- "Save Settings" primary button

**User Interactions**
- View and manage subscription
- Change billing plan
- Update payment method
- Upload/change company logo
- Customize invoice branding
- Set default values for invoice creation
- Configure invoice numbering format
- Change language and locale settings
- Save all settings

**Data Displayed**
- Current subscription details
- Usage metrics against plan limits
- Current branding preview
- Default values
- Billing history summary

---

### 9.2 User Management

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | SET-02 |
| **Purpose** | Manage user accounts and role assignments (Admin, User roles) |
| **Navigation From** | Sidebar > Settings > Users |
| **Navigation To** | Stays on same page (modal-based user management) |

**Key UI Elements**
- Page title: "User Management" with user count
- "Invite User" primary button
- User table columns:
  - Name
  - Email
  - Role (Admin/User badge)
  - Status (Active/Inactive/Pending)
  - Last Login
  - Actions (Edit Role, Deactivate, Remove)
- **Invite User Modal**:
  - Email address input
  - Role selector (Admin/User)
  - Custom message (optional)
  - "Send Invitation" button
- **Edit User Modal**:
  - User name (read-only)
  - Email (read-only)
  - Role dropdown (Admin/User)
  - Status toggle (Active/Inactive)
  - "Save" button
- Role permissions summary (expandable):
  - Admin: Full access to all modules
  - User: Create/edit invoices, view reports, no settings access
- User limit indicator (based on subscription plan)

**User Interactions**
- View all users and their roles
- Invite new users by email
- Change user roles
- Deactivate or remove users
- View role permission details
- Resend invitation to pending users
- Sort and filter user list

**Data Displayed**
- User list with roles and statuses
- Invitation status (Pending/Accepted)
- Last login timestamps
- User count against plan limit
- Role permission breakdown

---

### 9.3 Security Settings

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | SET-03 |
| **Purpose** | Manage password, two-factor authentication, and session security |
| **Navigation From** | Sidebar > Settings > Security |
| **Navigation To** | OTP Verification (SET-03 -> AUTH-03) for 2FA setup |

**Key UI Elements**
- **Password Section**:
  - "Change Password" button (opens inline form)
  - Current password input
  - New password input with strength meter
  - Confirm new password input
  - Password requirements list
  - "Update Password" button
- **Two-Factor Authentication (2FA)**:
  - Current 2FA status (Enabled/Disabled)
  - "Enable 2FA" / "Disable 2FA" toggle
  - 2FA method: SMS OTP or Authenticator App
  - QR code for authenticator app setup
  - Backup codes (generate/download)
- **Session Management**:
  - Active sessions list (device, browser, IP, last active)
  - "Terminate Session" button per session
  - "Terminate All Other Sessions" button
  - Session timeout setting (dropdown: 15min, 30min, 1hr, 4hr)
- **Login History**:
  - Recent login table: Date, IP Address, Device, Location, Status (Success/Failed)
  - Last 30 days of activity

**User Interactions**
- Change account password
- Enable/disable 2FA
- Set up authenticator app via QR code
- Generate and download backup codes
- View and terminate active sessions
- Set session timeout duration
- Review login history for suspicious activity

**Data Displayed**
- Current 2FA status
- Active session details
- Login history with location
- Password last changed date
- Backup codes (one-time display)

---

### 9.4 API / Integration Settings

| Attribute | Detail |
|-----------|--------|
| **Screen ID** | SET-04 |
| **Purpose** | Manage API keys, webhook endpoints, and third-party integration settings |
| **Navigation From** | Sidebar > Settings > Integrations |
| **Navigation To** | Stays on same page |

**Key UI Elements**
- **API Keys Section**:
  - API key display (masked, with copy button)
  - "Regenerate API Key" button (with confirmation)
  - API key creation date
  - Last used timestamp
  - API documentation link
- **Webhook Configuration**:
  - Webhook URL input
  - Event type checkboxes:
    - Invoice Created
    - Invoice Validated
    - Invoice Submitted
    - Invoice Cleared (C5)
    - Invoice Delivered (C4)
    - Invoice Rejected
  - Secret key for webhook verification
  - "Test Webhook" button
  - Webhook delivery log (last 10 deliveries with status)
- **ASP Integration**:
  - ASP provider status (Connected/Disconnected)
  - ASP endpoint configuration
  - Digital certificate status and expiry
  - "Test Connection" button
- **Accounting Software**:
  - Integration status (future phase placeholder)
  - Supported: QuickBooks, Xero, Zoho
  - "Connect" buttons (greyed out for future)
- "Save Settings" primary button

**User Interactions**
- View and copy API key
- Regenerate API key with confirmation
- Configure webhook URL and events
- Test webhook delivery
- View webhook delivery logs
- Check ASP connection status
- Test ASP connectivity
- View API documentation

**Data Displayed**
- Masked API key with copy function
- Webhook delivery log with response codes
- ASP connection status
- Certificate expiry dates
- API usage statistics
- Integration status indicators

---

## 10. Common Components

These components appear across multiple screens and maintain consistent behavior.

### 10.1 Sidebar Navigation

| Attribute | Detail |
|-----------|--------|
| **Component ID** | COMP-01 |
| **Purpose** | Primary navigation for all system modules |

**Key UI Elements**
- Techno Financials logo (top, links to Dashboard)
- Navigation items with icons:
  - Dashboard (home icon)
  - Master Data (database icon, expandable):
    - Seller Profile
    - Buyers
    - Items
    - Import Data
  - Invoices (document icon)
  - Submissions (send icon, expandable):
    - Submission Queue
    - Submission Status
  - Reports (chart icon)
  - Archive (archive icon)
  - Settings (gear icon, expandable):
    - Company
    - Users
    - Security
    - Integrations
- Active item highlight
- Collapse/expand sidebar toggle
- Subscription plan badge (bottom)
- User avatar and name (bottom, with dropdown: Profile, Logout)

---

### 10.2 Top Header Bar

| Attribute | Detail |
|-----------|--------|
| **Component ID** | COMP-02 |
| **Purpose** | Secondary navigation, search, and user utilities |

**Key UI Elements**
- Breadcrumb trail (e.g., Dashboard > Invoices > INV-2026-001)
- Global search input (search invoices, buyers, items)
- Notification bell icon with unread count badge
- Language switcher (EN/AR)
- User avatar with dropdown menu:
  - Company name
  - User name and role
  - My Profile
  - Settings
  - Help & Support
  - Logout

---

### 10.3 Notification Center

| Attribute | Detail |
|-----------|--------|
| **Component ID** | COMP-03 |
| **Purpose** | Display system notifications and alerts |

**Key UI Elements**
- Dropdown panel from notification bell
- Notification categories:
  - Submission Updates (Cleared, Rejected, Delivered)
  - Validation Alerts (errors found)
  - System Notices (maintenance, updates)
  - Subscription Alerts (approaching limits, renewal)
- Each notification: icon, title, message, timestamp, read/unread indicator
- "Mark All as Read" link
- "View All Notifications" link (full-page view)
- Real-time push notifications

---

### 10.4 Global Search

| Attribute | Detail |
|-----------|--------|
| **Component ID** | COMP-04 |
| **Purpose** | Search across all data types from any screen |

**Key UI Elements**
- Search input in header with keyboard shortcut hint (Cmd+K / Ctrl+K)
- Search results dropdown grouped by type:
  - Invoices (number, buyer, amount)
  - Buyers (name, TRN)
  - Items (name, SKU)
  - Reports (name)
- Recent searches list
- "View All Results" link for full search page

---

### 10.5 Help & Support

| Attribute | Detail |
|-----------|--------|
| **Component ID** | COMP-05 |
| **Purpose** | Provide user assistance and support access |

**Key UI Elements**
- Floating help button (bottom-right corner)
- Help panel with:
  - Context-sensitive help for current screen
  - Quick start guide links
  - FAQ accordion
  - "Contact Support" button (opens email or chat)
  - Video tutorials (future phase)
  - PINT AE documentation links
- Tooltip help icons (?) next to complex fields throughout the app

---

## Navigation Flow Summary

```
AUTH-01 (Login)
  ├── AUTH-02 (Register) -> AUTH-03 (OTP) -> SUB-01 (Plans) -> SUB-02 (Payment) -> DASH-01
  ├── AUTH-04 (Forgot Password) -> AUTH-01
  └── DASH-01 (Dashboard)
        ├── INV-01 (Invoice List)
        │     ├── INV-02 (Create Invoice) -> INV-04 (Validation) -> INV-03 (Preview)
        │     ├── INV-05 (Edit Invoice) -> INV-04 -> INV-03
        │     ├── INV-03 (Preview) -> INV-06 (PDF) / STS-01 (Submit)
        │     ├── INV-07 (Credit Note) -> INV-03
        │     └── INV-08 (Debit Note) -> INV-03
        ├── MD-01 (Seller Profile)
        ├── MD-02 (Buyer List) -> MD-03 (Buyer Form)
        ├── MD-04 (Item List) -> MD-05 (Item Form)
        ├── MD-06 (Import Data)
        ├── STS-01 (Submission Queue) -> STS-02 (Status) -> STS-03 (Detail)
        ├── RPT-01 (Report Index) -> RPT-02 (Generator) -> RPT-03 (Viewer)
        ├── ARC-01 (Archive Browser) -> ARC-02 (Archived Invoice)
        ├── SET-01 (Company Settings)
        ├── SET-02 (User Management)
        ├── SET-03 (Security Settings)
        └── SET-04 (API Settings)
```

---

## Screen ID Reference

| ID | Screen Name | Module |
|----|-------------|--------|
| AUTH-01 | Login Page | Authentication |
| AUTH-02 | Registration / Signup | Authentication |
| AUTH-03 | OTP Verification | Authentication |
| AUTH-04 | Forgot Password | Authentication |
| SUB-01 | Plan Selection | Subscription |
| SUB-02 | Payment Processing | Subscription |
| DASH-01 | Main Dashboard | Dashboard |
| MD-01 | Seller Profile | Master Data |
| MD-02 | Buyer List | Master Data |
| MD-03 | Buyer Create/Edit Form | Master Data |
| MD-04 | Item/Product List | Master Data |
| MD-05 | Item/Product Create/Edit Form | Master Data |
| MD-06 | Import Data | Master Data |
| INV-01 | Invoice List | Invoice Management |
| INV-02 | Create Invoice | Invoice Management |
| INV-03 | Invoice Preview | Invoice Management |
| INV-04 | Invoice Validation Results | Invoice Management |
| INV-05 | Invoice Edit | Invoice Management |
| INV-06 | Invoice PDF View | Invoice Management |
| INV-07 | Credit Note Creation | Invoice Management |
| INV-08 | Debit Note Creation | Invoice Management |
| STS-01 | Submission Queue | Submission & Status |
| STS-02 | ASP Submission Status | Submission & Status |
| STS-03 | Status Detail View | Submission & Status |
| RPT-01 | Report Dashboard / Index | Reports |
| RPT-02 | Report Generator | Reports |
| RPT-03 | Report Viewer | Reports |
| ARC-01 | Archive Browser | Archive |
| ARC-02 | Archived Invoice View | Archive |
| SET-01 | Company Settings | Settings |
| SET-02 | User Management | Settings |
| SET-03 | Security Settings | Settings |
| SET-04 | API / Integration Settings | Settings |

**Common Components**: COMP-01 (Sidebar), COMP-02 (Header), COMP-03 (Notifications), COMP-04 (Search), COMP-05 (Help)

---

*Document Version: 1.0*
*Created: 2026-03-16*
*Product: Techno Financials by 3techno*
*Phase: 1 (MVP)*
