# Theory Assignment:

● - What is `NPM`?

- 'NPM' is a package manager which helps to install packages need in our projects.

● - What is `Parcel/Webpack`? Why do we need it?

-       Parcel/Webpack is a bundler and we need it because it amplifies ability to write code and transitive dependencies of all pacakges we need to use in our projects.It help to munify , bundling and compression.

  ● - What is `.parcel-cache`

-       '.parcel-cache' caches code all the time.On our very first build parcel create '.parcel-cache' folder where it store caches in binary code.

  ● - What is `npx` ?

-       'npx' is the execute using 'npm'.

  ● - What is difference between `dependencies` vs `devDependencies`

-       'Depedencies' is name and version of packages that we need in production wherereas 'devDependencies' is only need in developing environment.

  ● - What is Tree Shaking?

  -     Tree shaking is removing all dead codes that never used in project will remove when bundling for production.

  ● - What is Hot Module Replacement?

  -     'HMR' hot module replacement is keep track of all files of we updated.There is 'file watcher' (written in C++). It keeps track all the files which are changing realtime and it tells server when to reload.These all are done by 'Parcel'(bundler).

  ● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
  own words.

  - 1 Tree Shaking - I love tree shaking the most because it removes all dead codes that never used in project will remove when bundling for production.
  - 2 Bundling - Bundling means Parceel main works to bundling the codes to become faster and prodcution level.
  - 3 Compressive codes
  - 4 Manifying Code
  - 5 Watcher Algorithym by using C++ - Watcher algorithym is updates and track all files changes in realtime and tell server to reload.

  ● - What is `.gitignore`? What should we add and not add into it?

  -     '.gitignore' is use to mark the folders or files names that we don't want to upload on github. We don't need to add files or folders that can be generate by bndler like 'node_modules' and dist. We need to add fundamental files that cannot be generate or recreate like 'package.json'.

  ● - What is the difference between `package.json` and `package-lock.json`

  -     'package.json' is the generic version of pacakages and 'package-lock.json' is exact version of packages being used in our projects.

  ● - Why should I not modify `package-lock.json`?

  -     Because it is not necessary and exact version of depedencies should not be change.

  ● - What is `node_modules` ? Is it a good idea to push that on git?

  -     'node_modules' is a king of data base of 'npm' which cotain depedencies and their own package.json.'node_modules' is very heavy, it is not good idea to push that on git or github.

  ● - What is the `dist` folder?

  -     'dist' is the folder that stores files which is come from bundling.'dist' folder contain minimized and optimized version of source code.

  ● - What is `browserlists`

  -     'browserlists' can make budles compatible for the specific version of browsers according to list.
