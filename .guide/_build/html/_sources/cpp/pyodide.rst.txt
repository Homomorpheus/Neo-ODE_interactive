Pyodide
=======

`This site <https://pyodide.org/en/stable/development/building-and-testing-packages.html#building-and-testing-packages-out-of-tree>`_ is essential!
Under the hood, pyodide uses emscripten. Thus, `install the emsdk <https://emscripten.org/docs/getting_started/downloads.html>`_.
On Linux, do not use your package manager for this - emscripten will need to be able to manage it's own version.
Add

.. code:: bash

    export EMSDK_QUIET=1
    source "/home/norberth/software/emsdk/emsdk_env.sh"

to your .bashrc or .zshrc on Linux or MacOS or do the equivalent under Windows (see emscripten documentation).

Run

.. code:: bash

    PYODIDE_EMSCRIPTEN_VERSION=$(pyodide config get emscripten_version)
    emsdk install ${PYODIDE_EMSCRIPTEN_VERSION}
    emsdk activate ${PYODIDE_EMSCRIPTEN_VERSION}

Apart from that, install pyodide-build using pip.
Now, python -m build can be replaced with

.. code:: bash

    pyodide build

Now, foo/dist should contain another wheel with emscripten in it's name. This file is what is needed.
