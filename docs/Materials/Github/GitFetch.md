## git fetch & pull的差异
1先用一张图来理一下git fetch和git pull的概念：

![git fetch和git pull图解](/img/gitFetch.jpg)

可以简单的概括为：

git fetch是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中。
而git pull 则是将远程主机的最新内容拉下来后直接合并，即：git pull = git fetch + git merge，这样可能会产生冲突，需要手动解决。


