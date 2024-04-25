Preparing jupyterlite
=====================

.. button-link:: https://jupyterlite.readthedocs.io/en/latest/index.html
    :color: primary

    The jupyterlite documentation

If you want to publish your project, fork `this repo <https://github.com/jupyterlite/demo>`_. (Otherwise, cloning it should suffice.)

Since Github Actions seems to have a problem with the my_fork/pypi directory (to be used shortly), disable it. (The simplest way is to delete the .github directory.)

Replace the contents of my_fork/content with your own notebooks (those that shall be available on the built website).
Create the my_fork/pypi directory and copy the pyodide wheel into it.

Importing
---------

Place this line before the first import:

.. code:: Python

    import piplite

System packages can be import without problems.

Third-party packages from PyPI
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For packages that are written only in Python or that have an emscripten wheel, use:

.. code:: Python

    await piplite.install("package")
    import package

It can occur that one needs to supply the URL to the wheel to piplite.install instead of the package name.
That URL can be found on the PyPI website, under the "Download files" tab.

An example for widgetsnbextension:

..  code:: Python

    await piplite.install("https://files.pythonhosted.org/packages/99/bc/82a8c3985209ca7c0a61b383c80e015fd92e74f8ba0ec1af98f9d6ca8dce/widgetsnbextension-4.0.10-py3-none-any.whl")

Homemade packages
~~~~~~~~~~~~~~~~~

The package called foo (which was earlier placed in the pypi directory) can be installed the same way:

.. code:: Python

    await piplite.install("foo")
    import foo

`This alternative to the pypi directory <https://jupyterlite.readthedocs.io/en/latest/reference/cli.html#pipliteaddon>`_ might also be of interest, especially if you want to build using Github Pages.
