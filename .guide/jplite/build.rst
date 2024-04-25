Build and deploy
================

First, install `the pyodide kernel for jupyterlite <https://pypi.org/project/jupyterlite-pyodide-kernel/>`_.

Now, run

.. code:: bash

    jupyter lite build --contents content --output-dir dist
    cd dist
    jupyter lite serve --port=8000

to build and deploy locally. Open the URL in the output of the last command to see the finished product.

**If you recompile the site and the content hasn't changed, delete the file inside jupyterlite. It will immediately pop back up, in the updated version.**
If that does not work, delete the IndexedDB entry of the site in the browser's dev tools and reload.

When deploying locally, the server will need to be restarted after the wheel is rebuilt.

Now, commit and push everything, including the built site. Enable Github Pages and open `https://username.github.io/my_fork/dist/index.html` .
Note that this link points to the dist directory of your repo.

Should the uploaded page not be able to find the pyodide kernel,
there is an unexpected (not to say shady) workaround:
In .github/workflows/deploy.yml , turn the

.. code:: Bash

    cp README.md content

line into something that throws an error, like:

.. code:: Bash

    false
