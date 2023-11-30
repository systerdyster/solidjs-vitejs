import { test, expect } from '@playwright/experimental-ct-solid';
//import { test } from '@playwright/test';
import { Todo } from './Todo';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
    const component = await mount(<Todo />);
    await expect(component).toContainText('Hello World');
});