# household-bounties

A family-friendly to-do list that pays out in sats!

<strong>Tech Stack:</strong>

- NextJS (JavaScript)
- Tailwind CSS
- ZBD API (for LN connectivity)
- Nostr (authenitcation, in-app communications)

<strong>Goal:</strong> <br><br>
We wanted to build a simple but powerful app that can be used to introduce friends and family to bitcoin by allowing them to    earn money for completing household tasks.

> One user will function as an "admin" - they will be in charge of topping up the application with sats. Other users will function as "doers", although the admin can complete tasks, too.

<strong>Proposed flow for app:</strong>
- Authentication page: (email, LNauth or NIP-42 auth)
- Navigation page: list of different groups you are in
	- Create new group
	- Delete group (are you sure? requires auth)
		- note: each group could have a 'bubble' (signifying this group requires action)
- Group page:
	- 'Tasks' Tab
		- List of clickable to-do tasks with options:
			- Mark Task completed > provide evidence via photo or text
			- Remind: nudge a task and notify all tagged users
			- Delete task (are you sure? dialog. admin only)
		- Create new task
			1) name task
			2) tag users who can complete
			3) expiration date/time for task
			4) set bounty in sats (payout when completed)
			5) repeat task? weekly, etc
			6) confirm (lock funds until task is completed or deleted?)
		- Reuse Task (from list of completed tasks)
		- See history
			- completed/deleted/expired tasks tab
			- payment history
	- 'Chat' Tab
	- 'Leaderboard' Tab
- Help page (link to help page on website)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
