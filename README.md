The basic inspiration was Qmee as it's the only one I signed up to test.

# User journeys

This is usually very standards but here's a brief representation of what a user journey would be as a survey taker.

There are mainly three routes:

1. Sign up - with the fields required to create an account, verifying email account before taking any surveys
2. Sign in - using email and password (or magic link via email) to log into the account
3. Reset password - in the case user can't log in

This would be the same route for other users such as SAs. The difference would be the URL for each user.

For Survey Takes:

- Sign up: `/account/sign-up`
- Sign in: `/account/sign-in`
- Reset password: `/account/reset-password`

For SAs:

- Sign up: `/enterprise/account/sign-up`
- Sign in: `/enterprise/account/sign-in`
- Reset password: `/enterprise/account/reset-password`

Admins would access via `/admin`

# Dashboards/Panels

Based on the personas created, there are three panels/dashboards depending on the role:

## Survey taker/crypto user

This is where users mainly can take the survey but it's also used to see history of surveys taken, earnings, potential earnings, charts based on daily/survey earnings and other features or services offered. Also access to profile to edit/delete account.

The options here are endless: the panel land page could be broken down into small widgets showing charts or earned amount and potential earnings, a chart with earnings per day with another metric showing the amount of surveys taken. In another row, more information about the token value compared to other crypto currencies. And finally on the bottom row, where the earnings can be spent with partnerships, etc.

Questions for this panel:

- is there any planning for cashback, games, deals?
- refer a friend?

## Survey Aggregators (SA)

The focus here is to give the SA quick access to surveys, responses, total spent and account balance with access to active surveys and their status. Also charts about audience demographics and other insights.

## Admin

The admin panel is a company only access with overview of both SAs performance, general application performance and both general view of all surveys taken and created.

# Marketing website

Instead of putting together a wireframe, I ended up creating a base marketing website because it's just easier for me to do it. This is just an initial ideal and the sections can be added accordingly.

The current content is just a placeholder. It would be good to have it broke down into more sections highlighting the advantages for each type of persona (i.e. survey management for SAs, crypto for savvy users, etc.)
