<div class="view" id="view-05">
    <h2>Où voulez-vous que nous envoyions le produit gratuit ?</h2>
    <div class="form-group">
        <label for="address">Adresse</label>
        <input type="text" class="form-control" name="address" id="address" placeholder="1234 Main St" required>
        <p class="warningText" id="addressWarning"><small>*Veuillez remplir le champ</small></p>
    </div>
    <div class="form-group">
        <label for="address2">Adresse 2</label>
        <input type="text" class="form-control" name="address2" id="address2" placeholder="Appartement, le studio, or l' étage">
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="city">Ville</label>
            <input type="text" class="form-control" name="city" id="city" required>
            <p class="warningText" id="cityWarning"><small>*Veuillez remplir le champ</small></p>
        </div>
        <div class="form-group col-md-4">
            <label for="state">State</label>
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
            <p class="warningText" id="stateWarning"><small>*Veuillez remplir le champ</small></p>
        </div>
        <div class="form-group col-md-2">
            <label for="zip">Code postale</label>
            <input type="text" class="form-control" name="zip" id="zip" required>
            <p class="warningText" id="zipWarning"><small>*Veuillez remplir le champ</small></p>
        </div>
    </div>
    <p><button type="button" class="btn btn-primary btn-lg btn-block" id="submit-form" role="button">Suivant &raquo;</button></p>
</div><!-- /#view-05 -->