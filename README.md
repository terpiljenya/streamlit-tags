# Streamlit-tags
[![pypi Version](https://img.shields.io/pypi/v/streamlit-tags.svg?style=flat-square&logo=pypi&logoColor=white)](https://pypi.org/project/streamlit-tags/)
[![conda Version](https://img.shields.io/conda/vn/conda-forge/streamlit_tags.svg?style=flat-square&logo=conda-forge&logoColor=white)](https://anaconda.org/conda-forge/streamlit_tags)
[![Downloads](https://static.pepy.tech/personalized-badge/streamlit-tags?period=total&units=none&left_color=grey&right_color=orange&left_text=Pip%20Downloads)](https://pepy.tech/project/streamlit-tags)
[![Conda downloads](https://img.shields.io/conda/dn/gagan3012/streamlit-tags?label=conda%20downloads)](https://anaconda.org/gagan3012/streamlit-tags)
[![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py)
[![Documentation Status](https://readthedocs.org/projects/streamlit-tags/badge/?version=latest)](https://streamlit-tags.readthedocs.io/en/latest/)


![streamlit-tags](https://socialify.git.ci/gagan3012/streamlit-tags/image?descriptionEditable=Tags%20in%20Streamlit&language=1&logo=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1366779897423810562%2Fkn7ucNPv.png&owner=1&stargazers=1&theme=Light)

A custom component to add Tags in Streamlit.

[![gif](https://user-images.githubusercontent.com/49101362/114277814-83cb1200-9a35-11eb-8761-9d8bb81ffadc.gif)](https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py)



### 📢 Favour:
It would be highly motivating, if you can STAR⭐ this repo if you find it helpful.


Try out a demo here: [![Streamlit App](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py)

Check out docs here: https://streamlit-tags.readthedocs.io/en/latest/
## Install
### PyPi
```
pip install streamlit-tags
```
The installation can also be found on [**PyPi**](https://pypi.org/project/streamlit-tags/) 
### Anaconda
```
conda install -c conda-forge streamlit_tags
```
The installation can also be found on [**Anaconda**](https://anaconda.org/gagan3012/streamlit-tags) 
## Usage
This library has two main functions to display and use tags:
- `st_tags` to display the tags feature
- `st_tags_sidebar` to display the tags in the sidebar
Check the [`examples/`](https://github.com/gagan3012/streamlit-tags/tree/master/examples) folder of the project a quick start.
Check out demo here: https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py
## Definition
```python
def st_tags(value: list,
            suggestions: list,
            label: str,
            text: str,
            maxtags: int,
            key=None) -> list:
    '''
    :param maxtags: Maximum number of tags allowed maxtags = -1 for unlimited entries
    :param suggestions: (List) List of possible suggestions (optional)
    :param label: (Str) Label of the Function
    :param text: (Str) Instructions for entry
    :param value: (List) Initial Value (optional)
    :param key: (Str)
        An optional string to use as the unique key for the widget.
        Assign a key so the component is not remount every time the script is rerun.
    :return: (List) Tags
        
    Note: usage also supports keywords = st_tags()
    '''
```
Note: the suggestion and value fields are optional
#### Note:
- The suggestion and value fields are optional
- Usage also supports `keywords = st_tags()`
- Upgrade to 1.1.9 for being able to control number of tags 

### We also have a function now to embed the tags function to the sidebar:

```python 
def st_tags_sidebar(value: list,
                    suggestions: list,
                    label: str,
                    text: str,
                    maxtags: int,
                    key=None) -> list:
    '''
    :param maxtags: Maximum number of tags allowed maxtags = -1 for unlimited entries
    :param suggestions: (List) List of possible suggestions (optional)
    :param label: (Str) Label of the Function
    :param text: (Str) Instructions for entry
    :param value: (List) Initial Value (optional)
    :param key: (Str)
        An optional string to use as the unique key for the widget.
        Assign a key so the component is not remount every time the script is rerun.
    :return: Tags
    '''
```
#### Note:
- The suggestion and value fields are optional
- Usage also supports `keywords = st_tags_sidebar()`
- Upgrade to 1.1.9 for being able to control number of tags 

## Example Usage
```python 
keywords = st_tags(
    label='# Enter Keywords:',
    text='Press enter to add more',
    value=['Zero', 'One', 'Two'],
    suggestions=['five', 'six', 'seven', 
                 'eight', 'nine', 'three', 
                 'eleven', 'ten', 'four'],
    maxtags = 4,
    key='1')
                   
keyword = st_tags_sidebar(
    label='# Enter Keywords:',
    text='Press enter to add more',
    value=['Zero', 'One', 'Two'],
    suggestions=['five', 'six', 'seven', 
                 'eight', 'nine', 'three', 
                 'eleven', 'ten', 'four'],
    maxtags = 4,
    key='1')
```
## Sample Images of the UI:
[![UI](https://user-images.githubusercontent.com/49101362/113942909-59494100-980a-11eb-8f4c-662f5c18d967.png)](https://share.streamlit.io/gagan3012/streamlit-tags/examples/app.py)

## We hit 10000 downloads!! 
