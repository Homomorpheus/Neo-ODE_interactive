Compiling with setuptools
=========================

The first step is to write the C++ code using pybind11 and compile it to an .so file for testing.
After that, it has to be compiled to a wheel using setuptools. Wheels (.whl files) are python's way of packaging libraries. See `this article <https://realpython.com/python-wheels/>`_.
To install setuptools, run:

.. code:: bash

    pip install build

Let us say that our project and root directory are called foo, with the pybind code in foo/bind_foo.cc .
The following also assumes that all the code is within the header files.
The following should be in foo/conf.py :

.. code:: python

    from setuptools import setup
    from pybind11.setup_helpers import Pybind11Extension

    ext_modules = [
        Pybind11Extension(
            "foo",
            ["bind_foo.cc"],
        ),
    ]

    headers = ["header_file_for_bind_foo.h",
               "another_header_file.h",
               "ode.h",
               "Newton.h"]

    setup(
        name="",
        version="0.0.1",
        ext_modules=ext_modules,
        headers=headers,
    )

In foo/pyproject.toml :

.. code:: toml

    [build-system]
    requires = [
        "setuptools>=42",
        "scikit-build>=0.13",
        "cmake>=3.18",
        "pybind11"
    ]
    build-backend = "setuptools.build_meta"

You can also supply directories with header files, similar to CMake's include_directory.
Say we have two such folders, header_file_dir and another_header_file_dir. Create foo/Manifest.in with the following content:

.. code::

    graft header_file_dir
    graft another_header_file_dir

The result can be compiled by executing

.. code:: bash

   python -m build

within the foo directory. The compiled wheel can then be found in foo/dist and installed using pip.
If this works, the next step is to compile a Web Assembly wheel. This is achieved using pyodide.
