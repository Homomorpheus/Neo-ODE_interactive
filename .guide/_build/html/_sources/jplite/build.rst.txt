Build and deploy
================

Now, run

.. code:: bash

    jupyter lite lite build --contents content --output-dir dist
    cd dist
    jupyter lite serve --port=8000

to build and deploy locally. Open the URL in the output of the last command to see the finished product.

**If you recompile the site and the content hasn't changed, augment the port number.**
If you have found a more elegant solution for this, please contact the author of this site.

Now, commit and push everything, including the built site. Enable Github Pages and open `https://username.github.io/my_fork/dist/index.html` .
Note that this link points to the dist directory of your repo.
