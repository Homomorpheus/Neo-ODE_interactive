Fork jupyterlite
================

`The jupyterlite documentation <https://jupyterlite.readthedocs.io/en/latest/quickstart/deploy.html>`_.
If you want to publish your project, fork `this repo <https://github.com/jupyterlite/demo>`_. (Otherwise, cloning it should suffice.)

Since Github Actions seems to have a problem with the my_fork/pypi directory (to be used shortly), disable it. (The simplest way is to delete the .github directory.)

Replace the contents of my_fork/content with your own notebooks (those that shall be available on the built website).
Create the my_fork/pypi directory and copy the pyodide wheel into it.

Apart from that, install `the pyodide kernel for jupyterlite <https://pypi.org/project/jupyterlite-pyodide-kernel/>`_.
