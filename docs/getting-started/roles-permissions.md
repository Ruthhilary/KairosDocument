# Roles & Permissions

Kairos has four user roles. Your role determines what you can see and what you can do. There is no role switcher — your permissions are set when your account is configured and are reflected immediately when you log in.

## Role Overview

| Role | Scope | Summary |
|------|-------|---------|
| Member | Own data only | Self-service profile, forms, and history |
| Leader | Their department or fellowship only | Roster, attendance, follow-ups for their group |
| Pastor | Their branch only | Full branch management, reports, member approvals |
| Admin | All branches | Complete system access |

---

## Member

Members are the base level of the system. After registering and being approved, a member can:

**Can do:**
- View and edit their own profile (name, contact details, photo, emergency info)
- View their own membership status and home branch
- See which departments and fellowships they belong to
- View their own attendance history via **My Attendance**
- Submit forms: First-Time Visitor, New Believers Class, Baptism, Testimony, Baby Naming, Baby Dedication
- Request to join a fellowship or outreach program within their branch
- Register as a worker on an outreach program

**Cannot do:**
- View other members' profiles or data
- Manage any group, fellowship, or department
- Approve requests or take administrative actions
- Access reports or analytics

> **Pending members** (registered but not yet approved) have even more restricted access — they can only view their own profile until an admin or pastor approves their account.

---

## Leader

Leaders are department leads, deputies, fellowship leaders, and co-leaders. Their access is scoped strictly to the groups they lead. A leader with no group assignment has the same access as a member.

**Can do:**
- View and manage the roster of their specific department or fellowship
- Approve or reject join requests for their group
- Record meeting attendance and create meetings
- Log follow-up notes on members in their group
- View member contact details within their group
- Create and update outreach programs they coordinate
- Send broadcast messages to their own group only

**Admin department leaders additionally:**
- Review front-desk form submissions (First-Time Visitor, Altar Call, Baptism forms)

**New Believers department leaders additionally:**
- Full visibility across the discipleship pipeline in their branch

**Reports:**
- Data scoped to members of their group only — not the whole branch

**Cannot do:**
- Access data outside their assigned group
- Create branches, approve member registrations, or assign roles
- See other departments' or fellowships' rosters

---

## Pastor

Pastors are responsible for an entire branch. Their access is fully scoped to their assigned branch and does not cross into other branches.

**Can do:**
- View and manage all members across their branch
- Approve new member registrations
- Deactivate or reactivate members
- Import and export member data via CSV
- Create and manage all fellowships and departments in their branch
- Create outreach programs for their branch
- Record attendance for services and fellowship meetings
- View all form submission types (First-Time Visitor, Testimony, Baby Naming, Baby Dedication, etc.)
- Export form submissions and manage dormant attendees
- Access full branch-level reports: member growth, attendance trends, fellowship activity, new believers pipeline

**Cannot do:**
- Access data from any other branch
- Create or manage branches themselves
- Assign system-level roles (Admin) to members
- View church-wide analytics across all branches

---

## Admin

Admins have full, unrestricted access across the entire system.

**Can do:**
- Create and manage branches and regions
- Assign and remove leadership roles (Main Pastor, Elder, Department Lead, etc.) to any member in any branch
- Manage members across all branches
- View church-wide analytics and run cross-branch reports
- Access the full admin dashboard with aggregate stats across all branches
- Configure system-level settings unavailable to other roles
- Manage approval queues across all branches

**Note on financial data:**
By design, system-level admins handling technical functions do not automatically have access to sensitive member financial data. Explicit privileges are required for financial access. This separation of duties is intentional.

---

## Permission Matrix

| Action | Member | Leader | Pastor | Admin |
|--------|--------|--------|--------|-------|
| Edit own profile | ✅ | ✅ | ✅ | ✅ |
| View own attendance | ✅ | ✅ | ✅ | ✅ |
| Submit forms | ✅ | ✅ | ✅ | ✅ |
| View group roster | ❌ | ✅ (own group) | ✅ | ✅ |
| Approve join requests | ❌ | ✅ (own group) | ✅ | ✅ |
| Record attendance | ❌ | ✅ (own group) | ✅ | ✅ |
| Manage members | ❌ | ❌ | ✅ (own branch) | ✅ |
| Approve registrations | ❌ | ❌ | ✅ (own branch) | ✅ |
| Import/export CSV | ❌ | ❌ | ✅ (own branch) | ✅ |
| Create departments | ❌ | ❌ | ✅ (own branch) | ✅ |
| Branch-level reports | ❌ | ❌ | ✅ (own branch) | ✅ |
| Manage branches | ❌ | ❌ | ❌ | ✅ |
| Manage regions | ❌ | ❌ | ❌ | ✅ |
| Church-wide analytics | ❌ | ❌ | ❌ | ✅ |
| Assign system roles | ❌ | ❌ | ❌ | ✅ |
