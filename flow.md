## install

f + Iskin + rf + ...:

corepack enable
yarn set version stable

yarn config set nodeLinker node-modules
Remove-Item -Recurse -Force .yarn, .pnp.* , node_modules
yarn install

 yarn create vite for_test2 --template react

yarn add react@18.2.0 react-dom@18.2.0


## install 2

PS D:\R\for_test2> yarn add react-router-dom@5
➤ YN0000: · Yarn 4.5.3
➤ YN0000: ┌ Resolution step
➤ YN0085: │ + react-router-dom@npm:5.3.4, @babel/runtime@npm:7.26.0, history@npm:4.10.1, hoist-non-react-statics@npm:3.3.2, and 8 more.
➤ YN0000: └ Completed in 0s 766ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 12 packages were added to the project (+ 1.86 MiB).
➤ YN0000: └ Completed in 0s 348ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 0s 541ms
➤ YN0000: · Done in 1s 702ms
PS D:\R\for_test2> yarn stylelint
Usage Error: Couldn't find a script named "stylelint".

$ yarn run [--inspect] [--inspect-brk] [-T,--top-level] [-B,--binaries-only] [--require #0] <scriptName> ...
PS D:\R\for_test2> yarn add stylelint
➤ YN0000: · Yarn 4.5.3
➤ YN0000: ┌ Resolution step
➤ YN0085: │ + stylelint@npm:16.11.0, @csstools/css-parser-algorithms@npm:3.0.4, @csstools/css-tokenizer@npm:3.0.3, and 69 more.
➤ YN0000: └ Completed in 0s 864ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 72 packages were added to the project (+ 7.24 MiB).
➤ YN0000: └ Completed in 1s 37ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 5s 251ms
➤ YN0000: · Done in 7s 219ms
PS D:\R\for_test2> yarn add materialize-css@next
➤ YN0000: · Yarn 4.5.3
➤ YN0000: ┌ Resolution step
➤ YN0085: │ + materialize-css@npm:1.0.0-rc.2
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0013: │ A package was added to the project (+ 1.41 MiB).
➤ YN0000: └ Completed in 0s 394ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 0s 327ms
➤ YN0000: · Done in 0s 848ms
PS D:\R\for_test2> yarn add json-server
➤ YN0000: · Yarn 4.5.3
➤ YN0000: ┌ Resolution step
➤ YN0085: │ + json-server@npm:1.0.0-beta.3, @polka/url@npm:1.0.0-next.28, @tinyhttp/accepts@npm:2.2.3, @tinyhttp/app@npm:2.4.0, and 39 more.     
➤ YN0000: └ Completed in 0s 844ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 43 packages were added to the project (+ 2.66 MiB).
➤ YN0000: └ Completed in 1s 492ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 2s 109ms
➤ YN0000: · Done in 4s 507ms
PS D:\R\for_test2> yarn add concurrently --dev
➤ YN0000: · Yarn 4.5.3
➤ YN0000: ┌ Resolution step
➤ YN0085: │ + concurrently@npm:9.1.0, cliui@npm:8.0.1, get-caller-file@npm:2.0.5, lodash@npm:4.17.21, require-directory@npm:2.1.1, and 8 more.   
➤ YN0000: └ Completed in 0s 421ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 13 packages were added to the project (+ 7.24 MiB).
➤ YN0000: └ Completed in 0s 527ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 6s 521ms
➤ YN0000: · Done in 7s 544ms
PS D:\R\for_test2> 