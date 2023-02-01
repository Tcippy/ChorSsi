import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
import { grey } from '@mui/material/colors';
import Handlebars from "handlebars";


const page=`{{> component_nav moreNavLinks=navLinks}}

<div class="content">
    <div class="container">
        <form novalidate autocomplete="false" method="POST" action="/connections/new">
            <button type="submit" class="btn btn-primary btn-lg btn-block mb-3" {{#if invitation}}disabled{{/if}}>
                Create New Invitation
            </button>
        </form>

        {{#if invitation}}
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label>Copy the following invitation object:</label>
                    <div class="input-group">
                        <textarea id="invitationObject" class="form-control" cols="30" rows="10" readonly>{{ invitation.invitation }}</textarea>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onclick="copyInputValue('#invitationObject')">
                                <i class="fas fa-clipboard"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>Alternatively copy the following invitation URL:</label>
                    <div class="input-group">
                        <input id="invitationUrl" type="text" class="form-control" value="{{ invitation.invitation_url }}"
                            readonly>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onclick="copyInputValue('#invitationUrl')">
                                <i class="fas fa-clipboard"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{/if}}
    </div>
</div>`

function SSIPage() {

 

  return (
    <div>
    {Handlebars.compile(page)}
    </div>
    )
}

export default SSIPage;