# Gitflow Presentation

## Individual Project.

UI Library using React TypeScript, SCSS, Storybook with theming (light/dark).

## Workflow

### Branches.

- `main`
- `develop`

### Work (via Backlog Tickets) (ex: [feature] ITS_RCT-01: button component)

1.  Checkout new branch from `develop`

    > feature/ITS_RCT-01-button-component

2.  Do something....

3.  Commit

    - Clear all consoles (terminal, browser) before commit, if not, cannot pass commit hooks.

    - Commit rule: [Commitlint](https://www.conventionalcommits.org/en/v1.0.0/)

      > feat(ITS_RCT-01): button component and stories

4.  PR

    - Compare storybook captures with Figma.

    - Ensure the ticket scope. (don't fix `Badge` bugs in the `Button` feature task, ...)

    - Fix CI pipelines for lint and test (if any).

    - Fix reviews.

5.  Deployment

    - Each merge event to `develop` will create a new tag. (ex: 1.0.0-develop-1).

    - [Storybook Deployment](https://internship-react.haibazo.com/truonghd/storybook/latest/index.html): https://internship-react.haibazo.com/{account_name}/storybook/{tag_name}/index.html

6.  Note

    - This is UI library repository, ensure the backward compatibility when updating props.

    - Cannot access repository outside the company.

    - Keep branch small and focused.
