---
title: Backoffice - git lfs
upload_file: d
---
# H﻿ow to store large file with Git

**Git LFS (Large File Storage)** is an extension to Git that helps developers efficiently manage large binary files like images, videos, and datasets. Instead of storing these files directly in the Git repository, Git LFS replaces them with pointers, reducing repository size and improving performance. It seamlessly integrates with Git, making it easy to work with large files while preserving the core benefits of version control.

<﻿div style={{ textAlign: 'center' }}>

![How git lfs works](/img/git-lfs.png "How git lfs works")

<﻿/div>

## P﻿rerequisites

* [I﻿nstall git lfs](https://git-lfs.com/)

## A﻿dd git lfs to your repo

<details>
  <summary>**Details about the file `.gitattributes`**</summary>
  <div>
      <summary>
        The `.gitattributes` file is a configuration file used in Git repositories to specify how certain files should be treated. It's used to define attributes and rules for how Git should handle files during operations like committing, merging, and checking out.
      </summary>
  </div>
</details>

### .﻿gitattribute and rules

1. **C﻿reate a `.gitattributes` file :**

   ```shell
   code .gitattributes
   ```
2. **Defining Git LFS Rules :**

   In the `.gitattributes` file, you specify rules for which files should be tracked using Git LFS. Each rule follows the format:

   ```shell
   # Pattern
   pattern filter=lfs diff=lfs merge=lfs -text

   # Example; All files with the .jpg extension should be managed by Git LFS (Large File Storage). 
   *.jpg filter=lfs diff=lfs merge=lfs -text
   ```

   * `pattern`: This is a pattern that matches the files you want to manage with Git LFS. You can use wildcards like `*` to match specific file types or paths.
   * `filter`: This should be set to `lfs` to indicate that Git LFS should be used for these files.
   * `diff`: This specifies that Git LFS should be used during the diff (comparison) process for these files.
   * `merge`: This specifies that Git LFS should be used during the merge process for these files.
   * `-text`: This flag indicates that these files should be treated as binary files and not as text files.
3. **Commit and Push :**

   After you've defined the rules in the `.gitattributes` file, save the file and commit it to your Git repository. Make sure to also commit the actual files that you want to be managed by Git LFS.

## G﻿it lfs cheatsheet

* l﻿ist all files managed by git lfs

  ```shell
  git lfs ls-files --all
  ```
* T﻿rack files by its extension\
  W﻿ill add from the `.gitattributes` file :

  `*.jpeg filter=lfs diff=lfs merge=lfs -text`

  ```shell
  git lfs track "*.jpg"
  ```
* U﻿ntrack files by its extension

  ```shell
  git lfs untrack "*.jpg"
  ```

  W﻿ill remove from the `.gitattributes` file :

  `*.jpeg filter=lfs diff=lfs merge=lfs -text`
* T﻿rack a file by it's path

  ```shell
  git lfs track
  ```
* d﻿e