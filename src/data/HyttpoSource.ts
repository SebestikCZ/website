import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
	id: 'hyttpo',
	name: 'Hyttpo',
	global: 'Hyttpo',
	repo: 'Garlic-Team/hyttpo',
	docsFolder: '/docs',
	defaultTag: 'master',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gt(tag.replace(/^v/, ''), '0.4.1'),
});
