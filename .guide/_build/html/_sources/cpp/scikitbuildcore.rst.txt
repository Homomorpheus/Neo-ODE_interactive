Compiling with scikit-build-core
================================

https://scikit-build-core.readthedocs.io/en/latest/index.html

Under some circumstances, scikit-build-core is far easier to get to work than scikit-build.
If CMake is already set up, it should also be less work than setting up a pure setuptools build.

A full working example can be found here: https://github.com/triadtitans/ASC-ODE/tree/pyodide_build
That project is also used here: https://github.com/triadtitans/rigid_body_interactive
It can be recommended to clone and try this official example: https://github.com/pybind/scikit_build_example

The project shall be called foo; the library being importable as lib_foo.foo.
It must contain:

A pyproject.toml
~~~~~~~~~~~~~~~~

.. code:: toml

    [build-system]
    requires = ["scikit-build-core>=0.3.3", "pybind11"]
    build-backend = "scikit_build_core.build"


    [project]
    name = "lib_foo"
    version="0.0.1"
    description="a foo library"
    authors = [
      { name = "John Doe" },
    ]
    requires-python = ">=3.7"

    [tool.scikit-build]
    wheel.expand-macos-universal-tags = true

A CMakeLists.txt
~~~~~~~~~~~~~~~~

.. code:: CMake

    cmake_minimum_required(VERSION 3.15...3.27)
    project(foo)

    # settings independent of what CMake shall build
    set (CMAKE_CXX_STANDARD 17) 
    include_directories(bar)


    # if invoked using scikit-build-core
    if(DEFINED SKBUILD)
        find_package(Python REQUIRED COMPONENTS Interpreter Development.Module)
        find_package(pybind11 CONFIG REQUIRED)

        python_add_library(foo MODULE src/foo.cc WITH_SOABI)
        target_link_libraries(foo PRIVATE pybind11::headers)

        target_compile_definitions(foo PRIVATE VERSION_INFO=${PROJECT_VERSION})

        install(TARGETS foo DESTINATION lib_foo)

    # if invoked to build executables
    else()
       # add_executable calls and all that shall not be in the library 

    endif()

A __init__.py
~~~~~~~~~~~~~

The project directory needs to contain a "lib_foo" directory with a __init__.py inside:

.. code:: python

    from __future__ import annotations

    from .foo import __doc__

    __all__ = ["__doc__"]




