import React from 'react';
import { PageHeader, Button, Panel } from 'react-bootstrap';

import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/mode/yaml';
import 'brace/mode/sh';
import 'brace/theme/github';

export default class PythonListComprehensionExamples extends React.Component {
    let simple_example = `nums = list(range(1, 10))
# problem: given a list of numbers, create a list where each number is doubled

# solution using an empty list and for loop
nums_doubled_lst = []
for num in nums:
    nums_doubled_lst.append(num * 2)

# solution using map and lambda
nums_doubled_map = list(maps(lambda x: x * 2, nums))

# solution using list comprehension
nums_doubled_listcomp = [num * 2 for num in nums]

# ensure each solution is the same
assert nums_doubled_listcomp == nums_doubled_lst
assert nums_doubled_listcomp == nums_doubled_map
`;

    let replacing_filter = `# replacing filter with lambda
even_nums_filter = list(map(lambda x: x % 2 == 0, nums))
even_nums_listcomp = [num for num in nums if num % 2 == 0]
assert even_nums_filter == even_nums_listcomp
`;

    let nested_list_comprehension = `# simple list comprehension nested example
nested_lst = [[1, 2], [3, 4], [5, 6]]
# flatten the nested list into a single list
flattened_lst = [num for nums in nested_lst for num in nums]
`;

    render() {
        return (
            <div>
                <PageHeader>Python List Comprehension Examples</PageHeader>
                <h1>Other Examples</h1>
                <Button bsStyle="link" href="http://docs.ansible.com/ansible/latest/intro_installation.html">Nothing really beats the documentation</Button>
                <h1>Examples</h1>
                <Panel header={ <h2>Simple Example</h2> }>
                    <p><strong>Below is a simple example using a list comprehension. </strong></p>
                    <AceEditor
                        mode="python"
                        theme="github"
                        name="simple_example"
                        onLoad={this.onLoad}
                        onChange={this.onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={simple_local_example}
                        width='auto'
                        height='442px'
                        readOnly={true}
                        setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2}}
                    />
                    <hr></hr>
                    <p><strong>Output from running the playbook is below.</strong></p>
                    <AceEditor
                        mode="sh"
                        theme="github"
                        name="simple_local_example_shell"
                        onLoad={this.onLoad}
                        onChange={this.onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={simple_local_example_output}
                        width='auto'
                        height='442px'
                        readOnly={true}
                        setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2}}
                    />
                </Panel>
                <Panel header={ <h2>Simple Remote Example</h2> }>
                    <p><strong>You need an IP of a machine you can SSH into. If you do not have a remote machine, you can continue using your local machine.</strong></p>
                    <AceEditor
                        mode="sh"
                        theme="github"
                        name="simple_remote_ping"
                        onLoad={this.onLoad}
                        onChange={this.onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={simple_remote_ping}
                        width='auto'
                        height='170px'
                        readOnly={true}
                        setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2}}
                    />
                    <hr></hr>
                    <p><strong>Now we know we can get into this remote machine. We could use the playbook from above, but lets do a practical example. Lets install Java8!</strong></p>
                </Panel>
            </div>
        )
    }
}