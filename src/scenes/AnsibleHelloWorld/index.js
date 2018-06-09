import React from 'react';
import { PageHeader, Button, Panel } from 'react-bootstrap';

import AceEditor from 'react-ace';

import 'brace/mode/python';
import 'brace/mode/yaml';
import 'brace/mode/sh';
import 'brace/theme/github';

let simple_local_example = `- hosts:
  - 127.0.0.1
  tasks:

  - name: Create a tmp directory
    file:
      path: tmp
      state: directory

  - name: Clone Ansible Jenkins role from GitHub
    git:
      repo: 'https://github.com/geerlingguy/ansible-role-jenkins.git'
      dest: tmp

  - name: Save shell command output to variable
    shell: 'curl example.com | grep title'
    register: output_variable

  - name: Print variable
    debug:
      msg: "The title tag for example.com is {{ output_variable.stdout }}"

  - name: Clean up and remove the tmp directory
    file:
      path: tmp
      state: absent`;

let simple_local_example_output = `$ ansible-playbook simple-example.yml -i 'local,'

PLAY [127.0.0.1] **************************************************************

GATHERING FACTS ***************************************************************
ok: [127.0.0.1]

TASK: [Create a tmp directory] ************************************************
changed: [127.0.0.1]

TASK: [Clone Ansible repository from GitHub] **********************************
changed: [127.0.0.1]

TASK: [Save shell command output to variable] *********************************
changed: [127.0.0.1]

TASK: [Print variable] ********************************************************
ok: [127.0.0.1] => {
   "msg": "The title tag for example.com is     <title>Example Domain</title>"
}

TASK: [Clean up and remove the tmp directory] *********************************
changed: [127.0.0.1]

PLAY RECAP ********************************************************************
127.0.0.1                  : ok=6    changed=4    unreachable=0    failed=0  `

let simple_remote_ping = `$ ansible localhost -m ping
localhost | success >> {
    "changed": false,
    "ping": "pong"
}
$ ansible 1.2.3.4 -m ping
1.2.3.4 | success >> {
    "changed": false,
    "ping": "pong"
}`

export default class AnsibleHelloWorld extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>Ansible Hello World</PageHeader>
                <h1>Installation</h1>
                <Button bsStyle="link" href="http://docs.ansible.com/ansible/latest/intro_installation.html">Nothing really beats the documentation</Button>
                <h1>Examples</h1>
                <Panel header={ <h2>Simple Local Example</h2> }>
                    <p><strong>Copy the following ansible playbook into simple-example.yml</strong></p>
                    <AceEditor
                        mode="yaml"
                        theme="github"
                        name="simple_local_example"
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