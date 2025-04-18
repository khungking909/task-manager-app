import fs from 'fs';
import path from 'path';

const componentType = process.argv[2];
const componentName = process.argv[3];

if (!componentType || !componentName) {
  process.exit(1);
}

const componentTypes = ['Atom', 'Molecules', 'Organism', 'Template', 'Page'];

if (!componentTypes.includes(componentType)) {
  process.exit(1);
}

const componentDir = path.resolve(`src/common/components/${componentType}`, componentName);

// Tạo thư mục component
fs.mkdirSync(componentDir, { recursive: true });

// Tạo các file
const files = [
  {
    name: 'index.ts',
    content: `export { ${componentName} } from './${componentName}';\nexport type { ${componentName}Props } from './type';\n`,
  },
  {
    name: 'type.ts',
    content: `export interface ${componentName}Props {\n  // Define props here\n}\n`,
  },
  {
    name: `${componentName}.module.scss`,
    content: '',
  },
  {
    name: `${componentName}.stories.tsx`,
    content: `import { ${componentName} } from '@components/${componentType}/${componentName}/${componentName}';
import type { Meta, StoryObj } from '@storybook/react';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ${componentName}> = {
  title: '${componentType}/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      viewport: '335x76',
      omitBackground: true,
    },
    design: {
      type: 'figma',
      url: '',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

`,
  },
  {
    name: `${componentName}.test.tsx`,
    content: `import { ${componentName} } from '@components/${componentType}/${componentName}/${componentName}';\nimport { render } from '@testing-library/react';\nimport { describe, expect, it } from 'vitest';\n\ndescribe('${componentName}', () => {\n  it('should render', () => {\n    const { container } = render(\n      <${componentName} />,\n    );\n    expect(container).toBeInTheDocument();\n  });\n});\n`,
  },
  {
    name: `${componentName}.tsx`,
    content: `import styles from './${componentName}.module.scss';\nimport { ${componentName}Props } from './type';\n\nconst ${componentName} = ({}: ${componentName}Props) => {\n  return <div className={styles.root}>{/* Component content */}</div>;\n};\n\nexport { ${componentName} };\n`,
  },
];

files.forEach((file) => {
  const filePath = path.join(componentDir, file.name);
  fs.writeFileSync(filePath, file.content || '', 'utf8');
});
