Embedding the notebook
======================


If you want to integrate the notebook into a site generated with sphinx, put the following into your rst source code:

.. code:: rst

    .. raw:: html

        <iframe src="https://username.github.io/my_fork/dist/index.html" width=100%, height=500></iframe>



Make sure that your HTML inside the raw directive is correct. Otherwise, the browser will try to fix it, which only gives you problems.

The above code results in the following:

.. raw:: html

    <iframe src="https://homomorpheus.github.io/Neo-ODE_interactive/dist/lab/index.html" width=100%, height=500></iframe>

One can also right-click on a file in jupyterlite's file browser, which gives a menu with the option to copy a link to that file, in jupyterlite.
See https://jupyterlite.readthedocs.io/en/stable/howto/content/share.html.
Using the resulting link, one achieves the following:

.. raw:: html

    <iframe src="https://homomorpheus.github.io/Neo-ODE_interactive/dist/lab/index.html?path=net.ipynb" width=100%, height=500></iframe>



Another (more complicated) option is `Jupyterlite-Sphinx <https://jupyterlite-sphinx.readthedocs.io/en/latest/index.html>`_.
