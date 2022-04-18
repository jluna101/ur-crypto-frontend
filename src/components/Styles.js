import React from 'react';

function Styles(props) {
    return (
        <div>
            <div>
            <h1>Typography</h1>
            <h1>h1. Bootstrap heading</h1>
            <h2>h2. Bootstrap heading</h2>
            <h3>h3. Bootstrap heading</h3>
            <h4>h4. Bootstrap heading</h4>
            <h5>h5. Bootstrap heading</h5>
            <h6>h6. Bootstrap heading</h6>

            <p class="h1">h1. Bootstrap heading</p>
            <p class="h2">h2. Bootstrap heading</p>
            <p class="h3">h3. Bootstrap heading</p>
            <p class="h4">h4. Bootstrap heading</p>
            <p class="h5">h5. Bootstrap heading</p>
            <p class="h6">h6. Bootstrap heading</p>

            <h3>
            Fancy display heading
            <small class="text-muted">With faded secondary text</small>
            </h3>

            <h1 class="display-1">Display 1</h1>
            <h1 class="display-2">Display 2</h1>
            <h1 class="display-3">Display 3</h1>
            <h1 class="display-4">Display 4</h1>
            <h1 class="display-5">Display 5</h1>
            <h1 class="display-6">Display 6</h1>
            {/* $display-font-sizes: (
            1: 5rem,
            2: 4.5rem,
            3: 4rem,
            4: 3.5rem,
            5: 3rem,
            6: 2.5rem
            ); */}

            <figure>
            <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
            </figure>

            <figure class="text-center">
            <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
            </figure>

            <h1>Colors</h1>
            <p className="text-primary">.text-primary</p>
            <p className="text-secondary">.text-secondary</p>
            <p className="text-success">.text-success</p>
            <p className="text-danger">.text-danger</p>
            <p className="text-warning">.text-warning</p>
            <p className="text-info">.text-info</p>
            <p className="text-light bg-dark">.text-light</p>
            <p className="text-dark">.text-dark</p>
            <p className="text-muted">.text-muted</p>
            <p className="text-white bg-dark">.text-white</p>

            <h1>Buttons</h1>
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>
                <button type="button" className="btn btn-link">Link</button>
                <p>&nbsp;</p>
                <a class="btn btn-primary" href="#" role="button">Link</a>
                <button class="btn btn-primary" type="submit">Button</button>
                <input class="btn btn-primary" type="button" value="Input"></input>
                <input class="btn btn-primary" type="submit" value="Submit"></input>
                <input class="btn btn-primary" type="reset" value="Reset"></input>
                <p>&nbsp;</p>
                <button type="button" class="btn btn-outline-primary">Primary</button>
                <button type="button" class="btn btn-outline-secondary">Secondary</button>
                <button type="button" class="btn btn-outline-success">Success</button>
                <button type="button" class="btn btn-outline-danger">Danger</button>
                <button type="button" class="btn btn-outline-warning">Warning</button>
                <button type="button" class="btn btn-outline-info">Info</button>
                <button type="button" class="btn btn-outline-light">Light</button>
                <button type="button" class="btn btn-outline-dark">Dark</button>
                <h2>Different Sized Buttons</h2>
                <button type="button" class="btn btn-primary btn-lg">Large button</button>
                <button type="button" class="btn btn-secondary btn-lg">Large button</button>
                <p>&nbsp;</p>
                <button type="button" class="btn btn-primary btn-sm">Small button</button>
                <button type="button" class="btn btn-secondary btn-sm">Small button</button>
                <p>Disabled state buttons </p>
                <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
                <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
                <a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
                <a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
                <p>Block Buttons</p>         
                <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
                <div class="d-grid gap-2 d-md-block">
                <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
                <p>Disabled Toggle States</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Toggle button</button>
                <button type="button" class="btn btn-primary active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Active toggle button</button>
                <button type="button" class="btn btn-primary" disabled data-bs-toggle="button" autocomplete="off">Disabled toggle button</button>
                <p>&nbsp;</p>
                <div className="w-25 p-3" style={{backgroundColor: '#eee'}}>Width 25%</div>
                <div className="w-50 p-3" style={{backgroundColor: '#eee'}}>Width 50%</div>
                <div className="w-75 p-3" style={{backgroundColor: '#eee'}}>Width 75%</div>
                <div className="w-100 p-3" style={{backgroundColor: '#eee'}}>Width 100%</div>
</div>
</div>
</div>
</div>
            </div>
        </div>
        
    );
}

export default Styles;