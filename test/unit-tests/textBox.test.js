let { openBrowser, goto, textBox, closeBrowser, write, into} = require('../../lib/taiko');
let { createHtml, removeFile, openBrowserArgs } = require('./test-util');
const test_name = 'textBox';

describe(test_name, () => {
    jest.setTimeout(20000); 
    let filePath;
    beforeAll(async () => {
        let innerHtml = '<div>' +
        //Input with type text
        '<form name="inputTypeText">' +
            '<div name="inputTypeTextWithInlineText">' +
                '<input type="text">inputTypeTextWithInlineText</input>' +
            '</div>' +
            '<div name="inputTypeTextWithWrappedLabel">' +
                '<label>' +
                    '<input type="text"/>' +
                    '<span>inputTypeTextWithWrappedLabel</span>' +
                '</label>' +
            '</div>' +
            '<div name="inputTypeTextWithLabelFor">' +
                    '<input id="inputTypeTextWithLabelFor" type="text"/>' +
                    '<label for="inputTypeTextWithLabelFor">inputTypeTextWithLabelFor</label>' +
            '</div>' +
        '</form>' +
        //Input with type password
        '<form name="inputTypePassword">' +
            '<div name="inputTypePasswordWithInlineText">' +
                '<input type="password">inputTypePasswordWithInlineText</input>' +         
            '</div>' +
            '<div name="inputTypePasswordWithWrappedLabel">' +
                '<label>' +
                    '<input type="password"/>' +
                    '<span>inputTypePasswordWithWrappedLabel</span>' +
                '</label>' +
            '</div>' +
            '<div name="inputTypePasswordWithLabelFor">' +
                    '<input id="inputTypePasswordWithLabelFor" type="password"/>' +
                    '<label for="inputTypePasswordWithLabelFor">inputTypePasswordWithLabelFor</label>' +
            '</div>' +
        '</form>' +
        //Textarea
        '<form name="textArea">' +
            '<div name="textAreaWithWrappedLabel">' +
                '<label>' +
                    '<span>textAreaWithWrappedLabel</span>' +
                    '<textarea></textarea>' +
                '</label>' +
            '</div>' +
            '<div name="textAreaWithLabelFor">' +
                '<label for="textAreaWithLabelFor">textAreaWithLabelFor</label>' +
                '<textarea id="textAreaWithLabelFor"></textarea>' +
            '</div>' +
        '</form>' +
        //contentEditable div
        '<form name="contentEditable">' +
            '<div id="contentEditableDiv" contenteditable=true>' +
            '</div>' +
        '</form>' +
        '</div>';
        filePath = createHtml(innerHtml, test_name);
        await openBrowser(openBrowserArgs);
        await goto(filePath);
    }, 30000);

    afterAll(async () => {
        await closeBrowser();
        removeFile(filePath);
    }, 30000);

    describe('input with type text', () => {
        xdescribe('with inline text', () => {
            test('test exists()', async () => {
                await expect(textBox('inputTypeTextWithInlineText').exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await write('inputTypeTextWithInlineText', into(textBox('inputTypeTextWithInlineText')));
                await expect(textBox('inputTypeTextWithInlineText').value()).resolves.toBe('inputTypeTextWithInlineText');
            });
        });

        describe('wrapped in label', () => {
            test('test exists()', async () => {
                await expect(textBox('inputTypeTextWithWrappedLabel').exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await write('inputTypeTextWithWrappedLabel', into(textBox('inputTypeTextWithWrappedLabel')));
                await expect(textBox('inputTypeTextWithWrappedLabel').value()).resolves.toBe('inputTypeTextWithWrappedLabel');
            });
        });

        describe('using label for', () => {
            test('test exists()', async () => {
                await expect(textBox('inputTypeTextWithLabelFor').exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await write('inputTypeTextWithLabelFor', into(textBox('inputTypeTextWithLabelFor')));
                await expect(textBox('inputTypeTextWithLabelFor').value()).resolves.toBe('inputTypeTextWithLabelFor');
            });
        });

        describe('attribute and value pair', () => {
            test('test exists()', async () => {
                await expect(textBox({id:'inputTypeTextWithLabelFor'}).exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await expect(textBox({id:'inputTypeTextWithLabelFor'}).value()).resolves.toBe('inputTypeTextWithLabelFor');
            });
        });
    });

    describe('input with type password', () => {
        xdescribe('with inline text',  () => {
            test('test exists()', async () => {
                await expect(textBox('inputTypePasswordWithInlineText').exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await write('inputTypePasswordWithInlineText', into(textBox('inputTypePasswordWithInlineText')));
                await expect(textBox('inputTypePasswordWithInlineText').value()).resolves.toBe('inputTypePasswordWithInlineText');
            });
        });

        describe('wrapped in label', () => {
            test('test exists()', async () => {
                await expect(textBox('inputTypePasswordWithWrappedLabel').exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await write('inputTypePasswordWithWrappedLabel', into(textBox('inputTypePasswordWithWrappedLabel')));
                await expect(textBox('inputTypePasswordWithWrappedLabel').value()).resolves.toBe('inputTypePasswordWithWrappedLabel');
            });
        });

        describe('using label for', () => {
            test('test exists()', async () => {
                await expect(textBox('inputTypePasswordWithLabelFor').exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await write('inputTypePasswordWithLabelFor', into(textBox('inputTypePasswordWithLabelFor')));
                await expect(textBox('inputTypePasswordWithLabelFor').value()).resolves.toBe('inputTypePasswordWithLabelFor');
            });
        });

        describe('attribute and value pair', () => {
            test('test exists()', async () => {
                await expect(textBox({id:'inputTypePasswordWithLabelFor'}).exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await expect(textBox({id:'inputTypePasswordWithLabelFor'}).value()).resolves.toBe('inputTypePasswordWithLabelFor');
            });
        });
    });

    describe('textarea', () => {
        describe('wrapped in label', () => {
            test('test exists()', async () => {
                await expect(textBox('textAreaWithWrappedLabel').exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await write('textAreaWithWrappedLabel', into(textBox('textAreaWithWrappedLabel')));
                await expect(textBox('textAreaWithWrappedLabel').value()).resolves.toBe('textAreaWithWrappedLabel');
            });
        });

        describe('using label for', () => {
            test('test exists()', async () => {
                await expect(textBox('textAreaWithLabelFor').exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await write('textAreaWithLabelFor', into(textBox('textAreaWithLabelFor')));
                await expect(textBox('textAreaWithLabelFor').value()).resolves.toBe('textAreaWithLabelFor');
            });
        });

        describe('attribute and value pair', () => {
            test('test exists()', async () => {
                await expect(textBox({id:'textAreaWithLabelFor'}).exists()).resolves.toBeTruthy();
            });

            test('test value()', async () => {
                await expect(textBox({id:'textAreaWithLabelFor'}).value()).resolves.toBe('textAreaWithLabelFor');
            });
        });
    });   
    
    describe('contentEditable', () => {
        test('test exists()', async () => {
            await expect(textBox({id:'contentEditableDiv'}).exists()).resolves.toBeTruthy();
        });

        test('test value()', async () => {
            await write('contentEditable', into(textBox({id:'contentEditableDiv'})));
            await expect(textBox({id:'contentEditableDiv'}).value()).resolves.toBe('contentEditable');
        });
    });
});
