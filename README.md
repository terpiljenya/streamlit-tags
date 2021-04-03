# Streamlit-tags

A custom component to have Tags in Streamlit.
![image](https://github.com/gagan3012/streamlit-tags/blob/master/img/streamlit-app-2021-03-14-03-03-7.gif)

Please star the repo and share the usage if you liked it. 

Try out a demo here: [![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py)

Check out docs here: 

## Updates

Now streamlit tags also supports theming and all the colours 

![image](https://user-images.githubusercontent.com/49101362/113494082-df554700-94ed-11eb-8c0a-bbbec64ee4c2.png)


## Install

```
pip install streamlit-tags
```

The installation can also be found on [**PyPi**](https://pypi.org/project/streamlit-tags/) 

## Usage

This library has two main functions to display and use tags:

- `st_tags` to display the tags feature
- `st_tags_sidebar` to display the tags in the sidebar

Check the [`examples/`](https://github.com/gagan3012/streamlit-tags/tree/master/examples) folder of the project a quick start.

Check out demo here: https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py

## Definition

```python
def st_tags(label: str,
            text: str,
            value: list,
            key=None) -> list
  '''

    :param label: (Str) Label of the Function
    :param text: (Str) Instructions for entry
    :param value: (List) Initial Value
    :param key: (Str)
        An optional string to use as the unique key for the widget.
        Assign a key so the component is not remount every time the script is rerun.
    :return: (List) Tags
    '''
```

### We also have a function now to embed the tags function to the sidebar:

```python 
def st_tags_sidebar(label: str,
                    text: str,
                    value: list,
                    key=None) -> list:
    '''

    :param label: (Str) Label of the Function
    :param text: (Str) Instructions for entry
    :param value: (List) Initial Value
    :param key: (Str)
        An optional string to use as the unique key for the widget.
        Assign a key so the component is not remount every time the script is rerun.
    :return: Tags
    '''
```

## Example Usage

```python 
import streamlit as st
from streamlit_tags import st_tags

keywords = st_tags('Enter Keyword:', 'Press enter to add more', ['One', 'Two', 'Three'])

st.write(keywords)
```
### UI for st_tags
![image](https://user-images.githubusercontent.com/49101362/111052896-56a83580-8470-11eb-9d70-6196757d9f85.png)


### UI for st_tags_sidebar
![image](https://user-images.githubusercontent.com/49101362/111333712-fab5fa80-8683-11eb-95a1-311205ea9605.png)

