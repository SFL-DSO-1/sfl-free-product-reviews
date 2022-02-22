<div class="view" id="view-05">
    <h2>Where Do You Want Us to Send Free Product?</h2>
    <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" name="address" id="address" placeholder="1234 Main St" required>
        <p class="warningText" id="addressWarning"><small>*Please fill in field</small></p>
    </div>
    <div class="form-group">
        <label for="address2">Address 2</label>
        <input type="text" class="form-control" name="address2" id="address2" placeholder="Apartment, studio, or floor">
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="city">City</label>
            <input type="text" class="form-control" name="city" id="city" required>
            <p class="warningText" id="cityWarning"><small>*Please fill in field</small></p>
        </div>
        <div class="form-group col-md-4">
            <label for="state">Province</label>
            <select name="state" id="state" class="form-control" required>
            <option value="">(select one)</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NT">Northwest Territories</option>
                <option value="NS">Nova Scotia</option>
                <option value="NU">Nunavat Territory</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="YT">Yukon Territory</option>
            </select>
            <p class="warningText" id="stateWarning"><small>*Please fill in field</small></p>
        </div>
        <div class="form-group col-md-2">
            <label for="zip">Zip</label>
            <input type="text" class="form-control" name="zip" id="zip" required>
            <p class="warningText" id="zipWarning"><small>*Please fill in field</small></p>
        </div>
    </div>
    <p><button type="button" class="btn btn-primary btn-lg btn-block" id="submit-form-ca-en" role="button">Next &raquo;</button></p>
</div><!-- /#view-05 -->